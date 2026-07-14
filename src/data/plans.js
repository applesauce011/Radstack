import { getPremiumCardCount } from './index'

const CARD_COUNT = `${getPremiumCardCount()}+ flashcards`

export const PLANS = [
  {
    id: '3month',
    label: '3 Months',
    tagline: 'The Cram Protocol',
    price: '$59',
    period: 'one-time',
    perDay: '$0.66 / day',
    priceEnvKey: 'VITE_STRIPE_PRICE_3MONTH',
    badge: null,
    highlight: false,
    features: [
      'Full access for 90 days',
      'All 12 subspecialties',
      CARD_COUNT,
      'Unlimited Differential Sprint',
      'Progress tracking & flagging',
    ],
  },
  {
    id: '12month',
    label: '12 Months',
    tagline: 'The Board Year',
    price: '$149',
    period: 'one-time',
    perDay: '$0.41 / day',
    priceEnvKey: 'VITE_STRIPE_PRICE_12MONTH',
    badge: 'Most Popular',
    highlight: true,
    features: [
      'Full access for 1 year',
      'All 12 subspecialties',
      CARD_COUNT,
      'Unlimited Differential Sprint',
      'Progress tracking & flagging',
    ],
  },
  {
    id: '4year',
    label: '4 Years',
    tagline: 'The Complete Study',
    price: '$349',
    period: 'one-time',
    perDay: '$0.24 / day',
    priceEnvKey: 'VITE_STRIPE_PRICE_4YEAR',
    badge: null,
    highlight: false,
    features: [
      'Full access for 4 years',
      'All 12 subspecialties',
      CARD_COUNT,
      'Unlimited Differential Sprint',
      'All future content included',
    ],
  },
]

export function getPriceId(envKey) {
  const map = {
    VITE_STRIPE_PRICE_3MONTH:  import.meta.env.VITE_STRIPE_PRICE_3MONTH,
    VITE_STRIPE_PRICE_12MONTH: import.meta.env.VITE_STRIPE_PRICE_12MONTH,
    VITE_STRIPE_PRICE_4YEAR:   import.meta.env.VITE_STRIPE_PRICE_4YEAR,
  }
  return map[envKey]
}

export function getPlanById(id) {
  return PLANS.find(p => p.id === id) ?? null
}
