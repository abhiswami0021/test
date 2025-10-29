/*
  # Service Inquiries and Newsletter System

  ## Overview
  This migration creates tables for managing service inquiries and newsletter subscriptions
  
  ## New Tables
  
  ### `service_inquiries`
  - `id` (uuid, primary key) - Unique identifier for each inquiry
  - `service_type` (text) - Type of service inquired about
  - `name` (text) - Full name of the person inquiring
  - `email` (text) - Email address for contact
  - `phone` (text, optional) - Phone number for contact
  - `company` (text, optional) - Company name
  - `message` (text) - Detailed message about the inquiry
  - `created_at` (timestamptz) - Timestamp when inquiry was submitted
  - `status` (text) - Status of inquiry (new, contacted, qualified, closed)
  
  ### `newsletter_subscribers`
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique) - Subscriber email address
  - `subscribed_at` (timestamptz) - Timestamp of subscription
  - `is_active` (boolean) - Whether subscription is active
  
  ## Security
  - Enable RLS on both tables
  - Allow public INSERT for new inquiries and subscriptions
  - Only authenticated admins can read/update (restrictive by default)
  
  ## Notes
  - Public can submit inquiries and subscribe (INSERT only)
  - No public read access to protect customer data
  - Admin policies can be added later when auth is implemented
*/

-- Create service_inquiries table
CREATE TABLE IF NOT EXISTS service_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now() NOT NULL,
  is_active boolean DEFAULT true NOT NULL
);

-- Enable RLS
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policies for service_inquiries
CREATE POLICY "Anyone can submit service inquiry"
  ON service_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_service_inquiries_created_at ON service_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_service_inquiries_status ON service_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);