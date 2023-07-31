import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://sqciznpufcbafxhpysor.supabase.co';
const supabaseKey = import.meta.env.VITE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
