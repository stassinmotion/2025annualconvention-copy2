
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SponsorshipRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  sponsorshipOption: string;
  sponsorType: string;
  specialRequests?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: SponsorshipRequest = await req.json();
    
    // Log the received data for debugging
    console.log("Received sponsorship request:", requestData);

    const emailResponse = await resend.emails.send({
      from: "MAS Convention <no-reply@massup.org>",
      to: ["ygamez@massup.org"],
      subject: `New ${requestData.sponsorType} Sponsorship Request - ${requestData.companyName}`,
      html: `
        <h1>New Sponsorship Request</h1>
        <h2>${requestData.sponsorType} - ${requestData.sponsorshipOption}</h2>
        <p><strong>Company:</strong> ${requestData.companyName}</p>
        <p><strong>Contact:</strong> ${requestData.contactName}</p>
        <p><strong>Email:</strong> ${requestData.email}</p>
        <p><strong>Phone:</strong> ${requestData.phone}</p>
        <p><strong>Address:</strong> ${requestData.address}</p>
        ${requestData.specialRequests ? `<p><strong>Special Requests:</strong> ${requestData.specialRequests}</p>` : ''}
        <hr>
        <p>This request was submitted on ${new Date().toLocaleString()}.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending sponsorship email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
