

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from "https://esm.sh/resend@2.0.0"

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

    // Initialize Resend client
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY is not configured')
    }
    const resend = new Resend(resendApiKey)

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

    // Generate passport file links
    let passportLinksHtml = '';
    if (booking.passport_files && booking.passport_files.length > 0) {
      const passportLinks = booking.passport_files.map((fileName: string) => {
        const { data } = supabase.storage
          .from('passport-files')
          .getPublicUrl(fileName)
        
        return `<li><a href="${data.publicUrl}" target="_blank" style="color: #2754C5; text-decoration: underline;">${fileName}</a></li>`
      }).join('');
      
      passportLinksHtml = `
        <p><strong>Fichiers passeport (cliquez pour télécharger):</strong></p>
        <ul style="margin-left: 20px;">
          ${passportLinks}
        </ul>
      `;
    }

    const emailContent = `
    <h2>Nouvelle réservation reçue !</h2>

    <h3>📋 INFORMATIONS CLIENT</h3>
    <p><strong>Nom:</strong> ${booking.last_name}</p>
    <p><strong>Prénom:</strong> ${booking.first_name}</p>
    <p><strong>Téléphone:</strong> ${booking.phone || 'Non renseigné'}</p>

    <h3>✈️ DÉTAILS DU VOYAGE</h3>
    <p><strong>Destination:</strong> ${booking.destination}</p>
    <p><strong>Date de départ:</strong> ${departureInfo}</p>
    <p><strong>Type de chambre:</strong> ${booking.room_type === 'double' ? 'Double' : 'Single'}</p>

    <h3>👥 VOYAGEURS</h3>
    <p><strong>Nombre total:</strong> ${booking.total_travelers}</p>
    <p><strong>Adultes:</strong> ${booking.adults}</p>
    <p><strong>Enfants avec lit:</strong> ${booking.children_with_bed}</p>
    <p><strong>Enfants sans lit:</strong> ${booking.children_without_bed}</p>
    <p><strong>Bébés (0-2 ans):</strong> ${booking.babies}</p>

    <h3>💰 PRIX</h3>
    <p><strong>Prix total:</strong> ${booking.total_price ? `${booking.total_price.toLocaleString()} DA` : 'À calculer'}</p>

    <h3>📄 PASSEPORTS</h3>
    <p><strong>Fichiers uploadés:</strong> ${booking.passport_files?.length || 0} fichier(s)</p>
    ${passportLinksHtml}

    <hr>
    <p><strong>Réservation créée le:</strong> ${new Date(booking.created_at).toLocaleString('fr-FR')}</p>
    <p><strong>ID de réservation:</strong> ${booking.id}</p>
    `

    console.log('Sending email to badreddinedaoud449@gmail.com...')

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Voyages Organisés <onboarding@resend.dev>',
      to: ['badreddinedaoud449@gmail.com'],
      subject: `Nouvelle réservation - ${booking.destination} - ${booking.first_name} ${booking.last_name}`,
      html: emailContent,
    })

    console.log('Email sent successfully:', emailResponse)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email envoyé avec succès',
        bookingId: booking.id,
        emailId: emailResponse.data?.id
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Vérifiez que RESEND_API_KEY est configuré et que le domaine est vérifié'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})

