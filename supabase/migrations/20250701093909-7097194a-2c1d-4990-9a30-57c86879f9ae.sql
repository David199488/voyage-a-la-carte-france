
-- Create a storage bucket for passport files
INSERT INTO storage.buckets (id, name, public)
VALUES ('passport-files', 'passport-files', true);

-- Create policy to allow anyone to upload passport files
CREATE POLICY "Anyone can upload passport files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'passport-files');

-- Create policy to allow anyone to view passport files
CREATE POLICY "Anyone can view passport files"
ON storage.objects FOR SELECT
USING (bucket_id = 'passport-files');

-- Create policy to allow anyone to delete passport files (for admin cleanup)
CREATE POLICY "Anyone can delete passport files"
ON storage.objects FOR DELETE
USING (bucket_id = 'passport-files');
