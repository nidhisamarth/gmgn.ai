// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xdwvjdktsrfrflewqrju.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhkd3ZqZGt0c3JmcmZsZXdxcmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDM0NDIsImV4cCI6MjA2NTUxOTQ0Mn0.TIUk5p5sM2E4loHAxSzscq6uTEnRnorOQS-IuJnKUEQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);