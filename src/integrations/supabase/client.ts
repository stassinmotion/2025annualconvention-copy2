// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dqvadgbidreoslivdffn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxdmFkZ2JpZHJlb3NsaXZkZmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNjAwNjIsImV4cCI6MjA1NjYzNjA2Mn0.uts31MvMpLQ3wE3B6flm9-1TDQJ1GHrzN1PAR7k_u6c";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);