import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// API endpoint for Gemini - updated to support Gemini 1.5 Flash
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

// Helper function to handle CORS preflight requests
function handleCorsPreflightRequest() {
  return new Response(null, { headers: corsHeaders });
}

// Helper function to create error responses
function createErrorResponse(status: number, errorType: string, message: string, details?: string) {
  console.error(`${errorType}: ${message}`, details ? `Details: ${details}` : '');
  
  return new Response(
    JSON.stringify({ 
      error: errorType,
      details: details || message,
      response: message 
    }),
    { 
      status: status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    }
  );
}

// Main handler function
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return handleCorsPreflightRequest();
  }

  try {
    // Get the API key
    const GOOGLE_AI_STUDIO_API_KEY = Deno.env.get('GOOGLE_AI_STUDIO_API_KEY');
    
    // Validate API key
    if (!GOOGLE_AI_STUDIO_API_KEY) {
      console.error('Google AI Studio API key is missing');
      return createErrorResponse(
        500, 
        'Configuration error',
        "The Schedule Assistant is currently unavailable due to a configuration issue. The API key is missing.",
        "GOOGLE_AI_STUDIO_API_KEY environment variable is not set"
      );
    }
    
    // Log key length for debugging (without revealing the actual key)
    console.log(`API Key length: ${GOOGLE_AI_STUDIO_API_KEY.length}`);
    console.log(`API Key first few chars: ${GOOGLE_AI_STUDIO_API_KEY.substring(0, 3)}...`);

    // Parse request data
    const requestData = await req.json();
    const { question, scheduleData } = requestData;
    
    // Validate input
    if (!question || !scheduleData) {
      return createErrorResponse(
        400, 
        'Invalid input',
        "Please provide both a question and schedule data.",
        `Missing parameters: ${!question ? 'question' : ''} ${!scheduleData ? 'scheduleData' : ''}`
      );
    }

    // Log the request (for debugging)
    console.log('Processing question:', question);
    console.log('Schedule data received with', 
      Array.isArray(scheduleData) ? `${scheduleData.length} days` : 'invalid format');

    // Add vendor information context
    const vendorContext = {
      exhibitBooth: {
        description: "Each booth package includes registration for two attendees with one 10'w x 10'd exhibit booth, with 8'h back drapes and 3' h side dividers; one booth sign; one 6' skirted display table and two chairs.",
        setup: {
          bulkSpace: "Sunday, June 8 at 9:00 AM",
          boothSetup: "Monday, June 9 at 10:00 AM (tentative)",
          exhibitHours: ["Tuesday, June 10: 8:30 AM – 3:00 PM", "Wednesday, June 11: 7:30 AM – 1:00 PM"],
          breakdown: "Wednesday at 1:00 PM",
        },
        rates: {
          member: { regular: "$1,025", late: "$1,125", onsite: "$1,225" },
          nonmember: { regular: "$1,075", late: "$1,175", onsite: "$1,275" },
        },
      },
      sponsorships: {
        premier: [
          { name: "Luncheon", cost: "$8,500", benefits: "8 attendees, 1 exhibit booth, 1 10' x 30' bulk space, and program ad" },
          { name: "Breakfast", cost: "$7,750", benefits: "7 attendees, 1 exhibit booth, 1 10' x 30' bulk space, and program ad" },
        ],
        other: [
          { name: "Platinum", cost: "$1,650", benefits: "2 attendees, listing in brochure and follow-up magazine" },
          { name: "Gold", cost: "$950", benefits: "1 attendee, listing in brochure and follow-up magazine" },
        ],
      },
      deadlines: {
        earlyBird: "April 23, 2025",
        regular: "May 6, 2025",
        late: "May 27, 2025",
        onsite: "May 28 - June 12, 2025",
      },
    };

    // Create an enhanced prompt that includes vendor information
    const enhancedPrompt = `
      You are a helpful assistant for the MAS Annual Convention. You have access to both schedule and vendor information.
      
      Schedule data: ${JSON.stringify(scheduleData)}
      Vendor information: ${JSON.stringify(vendorContext)}
      
      Please answer the following question about the convention:
      ${question}
      
      Be concise, friendly, and accurate. If someone asks about registration or exhibiting, mention the early bird special and suggest checking the member portal for the best rates.
      If you don't know something, politely say so and suggest contacting vendor relations at annualconvention@massup.org for specific inquiries.
    `;

    // Create the prompt for Gemini
    const context = JSON.stringify(scheduleData);
    const prompt = `
      You are a helpful assistant for a racing convention event. 
      You have access to the schedule information for the event.
      
      Here is the schedule data for context: ${context}
      
      Please answer the following question about the schedule:
      ${question}
      
      Be concise, friendly, and make sure your answers are accurate based on the schedule information provided.
      If you don't know the answer or it's not in the schedule data, politely say so and suggest checking the full agenda.
    `;

    // Make the API request to Google AI Studio with Gemini 1.5 Flash
    console.log('Calling Gemini API using model: gemini-1.5-flash-latest');
    const response = await fetch(`${GEMINI_API_URL}?key=${GOOGLE_AI_STUDIO_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: enhancedPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    // Log response status for debugging
    console.log(`Gemini API response status: ${response.status}`);

    // Handle API errors
    if (!response.ok) {
      let errorDetails = "";
      try {
        const errorData = await response.text();
        errorDetails = errorData;
        console.error('Error response from Gemini API:', errorData);
        
        // Check for specific error types
        if (errorData.includes("API key expired") || errorData.includes("invalid API key")) {
          return createErrorResponse(
            500,
            'API key error',
            "The Schedule Assistant is currently unavailable. The API key has expired or is invalid and needs to be updated.",
            errorDetails
          );
        }
        
        if (errorData.includes("not found for API version") || errorData.includes("not supported")) {
          return createErrorResponse(
            500,
            'API model error',
            "The Schedule Assistant is currently unavailable. The AI model 'gemini-1.5-flash-latest' may not be available or requires an update.",
            errorDetails
          );
        }

        if (errorData.includes("billing")) {
          return createErrorResponse(
            500,
            'Billing error',
            "The Schedule Assistant is currently unavailable. The Google Cloud project associated with the API key requires billing to be enabled.",
            errorDetails
          );
        }
      } catch (readError) {
        console.error('Could not read error response:', readError);
      }
      
      return createErrorResponse(
        500,
        'API error',
        "The Schedule Assistant is currently unavailable. There was an error communicating with the AI service.",
        `API returned status ${response.status}: ${errorDetails.substring(0, 200)}...`
      );
    }

    // Process the successful response
    const data = await response.json();
    console.log('Gemini API response structure:', JSON.stringify(Object.keys(data)));
    
    // Extract the response text - handle potential different response formats
    let responseText = "Sorry, I couldn't process your question.";
    if (data.candidates && 
        data.candidates[0] && 
        data.candidates[0].content && 
        data.candidates[0].content.parts) {
      responseText = data.candidates[0].content.parts[0].text || responseText;
      console.log('Successfully generated response from Gemini API');
    } else if (data.content && data.content.parts && data.content.parts.length > 0) {
      // Alternative response format
      responseText = data.content.parts[0].text || responseText;
      console.log('Successfully generated response from Gemini API (alternative format)');
    }

    // Return the successful response
    return new Response(
      JSON.stringify({ response: responseText }), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Unhandled error in schedule-chatbot function:', error);
    return createErrorResponse(
      500,
      'Unexpected error',
      "I encountered an unexpected error. Please try again later.",
      error.message || 'Unknown error'
    );
  }
});
