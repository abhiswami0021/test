import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ServiceInquiry {
  service_type: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface NewsletterSubscriber {
  email: string;
}

export const submitServiceInquiry = async (inquiry: ServiceInquiry) => {
  const { data, error } = await supabase
    .from('service_inquiries')
    .insert([inquiry])
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
};

export const subscribeToNewsletter = async (email: string) => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }])
    .select()
    .maybeSingle();

  if (error) {
    if (error.code === '23505') {
      throw new Error('This email is already subscribed');
    }
    throw error;
  }
  return data;
};
