
-- Create bookings table to store reservation data
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  destination TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  selected_departure JSONB,
  room_type TEXT NOT NULL CHECK (room_type IN ('double', 'single')),
  total_travelers INTEGER NOT NULL,
  adults INTEGER NOT NULL,
  children_with_bed INTEGER NOT NULL DEFAULT 0,
  children_without_bed INTEGER NOT NULL DEFAULT 0,
  babies INTEGER NOT NULL DEFAULT 0,
  total_price DECIMAL(10,2),
  passport_files TEXT[], -- Array to store file paths/names
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert bookings (public form)
CREATE POLICY "Anyone can create bookings" 
  ON public.bookings 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading bookings (for admin purposes)
CREATE POLICY "Anyone can view bookings" 
  ON public.bookings 
  FOR SELECT 
  USING (true);
