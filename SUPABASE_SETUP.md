# Supabase Setup Instructions

Follow these steps to set up Supabase for the BrewFi waitlist:

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and sign in
2. Click "New Project"
3. Fill in your project details (name, database password, region)
4. Wait for the project to be created

## 2. Create the Waitlist Table

Run this SQL in the Supabase SQL Editor (Dashboard > SQL Editor):

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  cafe_name TEXT NOT NULL,
  country TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert (for public submissions)
CREATE POLICY "Allow public insert" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create a policy to allow authenticated users to read (optional, for admin dashboard)
CREATE POLICY "Allow authenticated read" ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);
```

## 3. Get Your API Keys

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the following:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **Anon/Public Key** (looks like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## 4. Configure Environment Variables

Create a `.env.local` file in the root of your project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace the values with your actual Supabase credentials.

## 5. Restart Your Development Server

After creating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
```

## That's It! 🎉

Your waitlist is now connected to Supabase. Test it by filling out the form at `/waitlist`.

## Optional: View Submissions

To view waitlist submissions:
1. Go to your Supabase project dashboard
2. Navigate to Table Editor
3. Click on the `waitlist` table
4. You'll see all submissions in real-time



