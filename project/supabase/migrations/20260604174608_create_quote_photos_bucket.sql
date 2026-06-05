/*
  # Create quote-photos storage bucket

  Creates a public storage bucket for quote photo uploads. Bucket only —
  storage policies already exist from a prior migration.

  1. New Storage
    - Bucket: `quote-photos` (public, 5 MB file size limit, images only)
*/

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'quote-photos',
  'quote-photos',
  true,
  5242880,
  ARRAY['image/jpeg','image/png','image/webp','image/gif','image/heic','image/heif']
)
ON CONFLICT (id) DO NOTHING;
