/*
  # Create quotes table for jetwashing business

  1. New Tables
    - `quotes`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `phone` (text, phone number)
      - `email` (text, email address)
      - `address` (text, address or area)
      - `service_type` (text, what needs cleaning)
      - `photo_urls` (text array, URLs of uploaded photos)
      - `preferred_date` (date, preferred service date)
      - `message` (text, additional message)
      - `status` (text, quote status - defaults to 'new')
      - `created_at` (timestamptz, when submitted)

  2. Security
    - Enable RLS on `quotes` table
    - Allow anonymous inserts (public quote form submission)
    - No read/update/delete access from client (admin only via dashboard)
*/

CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  address text NOT NULL,
  service_type text DEFAULT '',
  photo_urls text[] DEFAULT '{}',
  preferred_date date,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public quote submissions"
  ON quotes FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
