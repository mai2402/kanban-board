import { createClient } from '@supabase/supabase-js'

 export const supabaseUrl = "https://ondcpxvxwssokutwohue.supabase.co"
 export const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uZGNweHZ4d3Nzb2t1dHdvaHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMDk4MzIsImV4cCI6MjA0NzU4NTgzMn0.lkz4q_w2m3zjmnhgBlqjJN8drkLLROQIFDbgYFlQfQc"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;