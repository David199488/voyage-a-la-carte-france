// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qkvgllsvedlobdpjfabb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrdmdsbHN2ZWRsb2JkcGpmYWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNTMxNzksImV4cCI6MjA2NjcyOTE3OX0.GsURv43P07UdajqZQMBhiHLpQLe2n0p18gAzzT3w7tE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});