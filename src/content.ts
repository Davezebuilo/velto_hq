// Site-wide copy and links. Placeholders are marked TODO until the real values are confirmed.

export const BOT_URL = 'https://t.me/Veltohq_bot' // TODO: confirm bot username

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Privacy policy', href: '#' }, // TODO: privacy page
  { label: 'Terms', href: '#' }, // TODO: terms page
  { label: 'Contact', href: '#' }, // TODO: contact link
]

export const SOCIAL_LINKS = {
  telegram: '#', // TODO
  x: '#', // TODO
  linkedin: '#', // TODO
  farcaster: '#', // TODO
}

export const STEPS = [
  {
    title: 'Connect',
    text: 'Add the Veltohq_bot as an admin to your group on Telegram',
  },
  {
    title: 'Set your preferences',
    text: 'Choose your subscription fee, set your subscription cycle and payment method.',
  },
  {
    title: 'Get Paid',
    text: 'Velto automatically handles payments for you forever',
  },
]

// TODO: answers are placeholders — the Figma file only contains the questions.
export const FAQS = [
  {
    q: 'How do payments work?',
    a: 'Members pay through the Velto bot using your chosen payment method. Once a payment is confirmed, Velto grants access to your group automatically and sends the funds to your account.',
  },
  {
    q: 'Do I need coding skills?',
    a: 'No. You add the bot to your group as an admin and set everything up through a few chat prompts — no code or technical setup required.',
  },
  {
    q: 'Can I use my existing group?',
    a: 'Yes. Velto works with private Telegram groups you already run. Add the bot as an admin and choose how existing members should be handled.',
  },
  {
    q: 'What payment methods are supported?',
    a: 'Stripe, PayPal, Paystack and stablecoins. You choose which ones your members can use.',
  },
  {
    q: 'What happens if a subscriber stops paying?',
    a: 'When a subscription lapses, Velto reminds the member and removes their access automatically at the end of the billing cycle. They can rejoin any time by paying again.',
  },
]
