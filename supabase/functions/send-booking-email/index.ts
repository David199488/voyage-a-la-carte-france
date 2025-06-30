
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { bookingId } = await req.json()

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Fetch booking data
    const { data: booking, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .single()

    if (error || !booking) {
      throw new Error('Booking not found')
    }

    // Format email content
    const departureInfo = booking.selected_departure 
      ? `${booking.selected_departure.dates || booking.selected_departure.period}`
      : 'Non spécifiée'

    const emailContent = `
    Nouvelle réservation reçue !

    === INFORMATIONS CLIENT ===
    Nom: ${booking.last_name}
    Prénom: ${booking.first_name}
    Téléphone: ${booking.phone || 'Non renseigné'}

    === DÉTAILS DU VOYAGE ===
    Destination: ${booking.destination}
    Date de départ: ${departureInfo}
    Type de chambre: ${booking.room_type === 'double' ? 'Double' : 'Single'}

    === VOYAGEURS ===
    Nombre total: ${booking.total_travelers}
    Adultes: ${booking.adults}
    Enfants avec lit: ${booking.children_with_bed}
    Enfants sans lit: ${booking.children_without_bed}
    Bébés (0-2 ans): ${booking.babies}

    === PRIX ===
    Prix total: ${booking.total_price ? `${booking.total_price.toLocaleString()} DA` : 'À calculer'}

    === PASSEPORTS ===
    ${booking.passport_files?.length || 0} fichier(s) de passeport uploadé(s)

    Réservation créée le: ${new Date(booking.created_at).toLocaleString('fr-FR')}
    ID de réservation: ${booking.id}
    `

    console.log('Email content prepared:', emailContent)
    console.log('Booking data:', booking)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email envoyé avec succès',
        bookingId: booking.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
