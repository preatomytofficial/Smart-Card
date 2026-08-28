/*
# Create profiles table and storage bucket for Smart Social Card Maker

## Overview
Creates the core data model for a Linktree-style NFC card platform. Users create
a digital profile card with their photo, logo, bio, and social media links. Each
profile gets a unique username that forms its public URL (e.g. /john).

This is a no-auth (single-tenant style) app: anyone can create and view profiles
without signing in. RLS policies allow anon + authenticated CRUD.

## New Tables

### profiles
- `id` (uuid, primary key)
- `name` (text, not null) — display name
- `username` (text, unique, not null) — URL slug, lowercase letters/numbers/dashes only
- `bio` (text, nullable) — short description
- `photo_url` (text, nullable) — profile photo URL (Supabase Storage public URL)
- `logo_url` (text, nullable) — logo image URL (Supabase Storage public URL)
- `facebook` (text, nullable) — Facebook profile URL or handle
- `instagram` (text, nullable) — Instagram profile URL or handle
- `youtube` (text, nullable) — YouTube channel URL or handle
- `telegram` (text, nullable) — Telegram URL or handle
- `twitter` (text, nullable) — X/Twitter URL or handle
- `whatsapp` (text, nullable) — WhatsApp number
- `linkedin` (text, nullable) — LinkedIn profile URL or handle
- `website` (text, nullable) — personal website URL
- `is_disabled` (boolean, default false) — admin can disable a profile
- `created_at` (timestamptz, default now())

## Storage
- Creates a public storage bucket `profiles` for uploading photos and logos.
- Policies allow anon + authenticated to upload and read files.

## Security (RLS)
- profiles table: anon + authenticated can SELECT, INSERT, UPDATE, DELETE.
  (Intentionally public — no sign-in required for this app.)
- Storage bucket `profiles`: public read, anon + authenticated upload.
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  username text UNIQUE NOT NULL,
  bio text,
  photo_url text,
  logo_url text,
  facebook text,
  instagram text,
  youtube text,
  telegram text,
  twitter text,
  whatsapp text,
  linkedin text,
  website text,
  is_disabled boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles table policies (no-auth app: anon + authenticated)
DROP POLICY IF EXISTS "anon_select_profiles" ON profiles;
CREATE POLICY "anon_select_profiles" ON profiles FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_profiles" ON profiles;
CREATE POLICY "anon_insert_profiles" ON profiles FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_profiles" ON profiles;
CREATE POLICY "anon_update_profiles" ON profiles FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_profiles" ON profiles;
CREATE POLICY "anon_delete_profiles" ON profiles FOR DELETE
  TO anon, authenticated USING (true);

-- Create storage bucket for profile images (idempotent)
INSERT INTO storage.buckets (id, name, public)
VALUES ('profiles', 'profiles', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies: allow public read, anon + authenticated upload
DROP POLICY IF EXISTS "anon_read_profiles_storage" ON storage.objects;
CREATE POLICY "anon_read_profiles_storage" ON storage.objects FOR SELECT
  TO anon, authenticated USING (bucket_id = 'profiles');

DROP POLICY IF EXISTS "anon_insert_profiles_storage" ON storage.objects;
CREATE POLICY "anon_insert_profiles_storage" ON storage.objects FOR INSERT
  TO anon, authenticated WITH CHECK (bucket_id = 'profiles');

DROP POLICY IF EXISTS "anon_update_profiles_storage" ON storage.objects;
CREATE POLICY "anon_update_profiles_storage" ON storage.objects FOR UPDATE
  TO anon, authenticated USING (bucket_id = 'profiles') WITH CHECK (bucket_id = 'profiles');

DROP POLICY IF EXISTS "anon_delete_profiles_storage" ON storage.objects;
CREATE POLICY "anon_delete_profiles_storage" ON storage.objects FOR DELETE
  TO anon, authenticated USING (bucket_id = 'profiles');

-- Index for fast username lookups
CREATE INDEX IF NOT EXISTS idx_profiles_username ON profiles (username);
