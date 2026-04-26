// POST /api/create-group-checkout
// Creates a Stripe checkout session for a multi-seat group purchase.
// No auth required — coordinators may not have accounts.
// Body: { programName, institution, numSeats, startYear, contactName, contactEmail }

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const BASE_PRICE_CENTS = 9900  // $99 per seat (12-month plan, full price)

const TIERS = [
  { min: 3,  max: 9,   discount: 0.20 },
  { min: 10, max: 19,  discount: 0.30 },
  { min: 20, max: Infinity, discount: 0.35 },
]

function getPricePerSeatCents(numSeats) {
  const tier = TIERS.find(t => numSeats >= t.min && numSeats <= t.max)
  if (!tier) return BASE_PRICE_CENTS
  return Math.round(BASE_PRICE_CENTS * (1 - tier.discount))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { programName, institution, numSeats, startYear, contactName, contactEmail } = req.body ?? {}

  if (!programName || !institution || !contactName || !contactEmail) {
    return res.status(400).json({ error: 'programName, institution, contactName, and contactEmail are required.' })
  }

  const seats = parseInt(numSeats)
  if (!seats || seats < 3 || seats > 500) {
    return res.status(400).json({ error: 'numSeats must be between 3 and 500.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(contactEmail)) {
    return res.status(400).json({ error: 'Invalid contact email.' })
  }

  const pricePerSeatCents = getPricePerSeatCents(seats)
  const planLabel = `12-Month Access (${seats} residents)`

  const session = await stripe.checkout.sessions.create({
    customer_email: contactEmail,
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: `RadiologyStack — ${planLabel}`,
          description: `${programName} · ${institution} · Individual access codes delivered after payment`,
        },
        unit_amount: pricePerSeatCents,
      },
      quantity: seats,
    }],
    mode: 'payment',
    invoice_creation: { enabled: true },
    success_url: `${process.env.VITE_APP_URL}/group/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.VITE_APP_URL}/group`,
    metadata: {
      type: 'group',
      program_name: programName,
      institution,
      num_seats: String(seats),
      start_year: String(startYear ?? ''),
      contact_name: contactName,
      contact_email: contactEmail,
      price_per_seat_cents: String(pricePerSeatCents),
    },
    allow_promotion_codes: false,
    automatic_tax: { enabled: true },
  })

  return res.status(200).json({ url: session.url })
}
