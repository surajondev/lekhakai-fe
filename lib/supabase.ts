import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON;

// const serviceRole = process.env.NEXT_PUBLIC_SERVICE_ROLE;

// export const supabaseAdmin = process.env.JWT_SEC;
console.log(supabaseUrl, anonKey);

//@ts-ignore
export const supabase = createClient(supabaseUrl, anonKey);
