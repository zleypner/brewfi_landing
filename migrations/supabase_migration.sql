-- BrewFi Waitlist Migration
-- Run this in your Supabase SQL Editor

-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  cafe_name TEXT NOT NULL,
  country TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create an index on email for faster lookups and to enforce uniqueness
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- Add a comment to the table
COMMENT ON TABLE public.waitlist IS 'Stores waitlist submissions from the BrewFi landing page';

-- Enable Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert (for public submissions)
CREATE POLICY "Allow public insert" ON public.waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy to allow authenticated users to read (optional, for admin dashboard)
CREATE POLICY "Allow authenticated read" ON public.waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a policy to allow only authenticated users to update
CREATE POLICY "Allow authenticated update" ON public.waitlist
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create a policy to allow only authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON public.waitlist
  FOR DELETE
  TO authenticated
  USING (true);
