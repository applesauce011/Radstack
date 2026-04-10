# RadStack 🩻

> High-yield radiology flashcards for Royal College & ABR exam prep.

## Stack

- **React 18** + **Vite** — fast dev server, instant HMR
- **React Router v6** — client-side routing
- **Zustand** — lightweight global state with localStorage persistence
- **Lucide React** — icons
- No backend required — all data stored in the browser

## Project Structure

```
radstack/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Routes
    ├── index.css         # Global design system (CSS vars)
    ├── data/
    │   └── decks.js      # All flashcard content lives here
    ├── store/
    │   ├── authStore.js      # User auth (localStorage)
    │   ├── progressStore.js  # Card progress per user
    │   └── studyStore.js     # Active session state
    ├── components/
    │   ├── auth/
    │   │   └── AuthForms.jsx     # Login + Register
    │   ├── cards/
    │   │   ├── Flashcard.jsx         # Card front/back with flip
    │   │   ├── StudyControls.jsx     # Nav, progress bar, shuffle
    │   │   ├── StartStudyModal.jsx   # Mode selection before session
    │   │   └── SessionComplete.jsx   # End-of-deck screen
    │   ├── layout/
    │   │   └── Navbar.jsx
    │   └── ui/
    │       ├── Button.jsx
    │       ├── Badge.jsx
    │       ├── Modal.jsx
    │       └── ProgressBar.jsx
    └── pages/
        ├── LandingPage.jsx
        ├── DashboardPage.jsx
        ├── DecksPage.jsx
        └── StudyPage.jsx
```

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm (comes with Node)
- A Supabase project (free tier is fine)

### 1 — Set up Supabase tables (one-time)

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Open your project → **SQL Editor** → **New Query**
3. Paste the entire contents of `supabase/schema.sql` and click **Run**
4. You should see `card_progress` and `user_meta` in your Table Editor

> **Tip — disable email confirmation** for a private residents-only app:
> Authentication → Providers → Email → turn off **"Confirm email"**
> so users can sign in immediately after registering.

### 2 — Configure environment

The `.env` file in the project root contains your Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Find these at: Supabase Dashboard → Project Settings → API.
**Never commit `.env` to git** — it's in `.gitignore`.

### 3 — Install and run

```bash
npm install
npm run dev
# Open http://localhost:5173
```

### Production Build

```bash
npm run build
# Output goes to /dist — deploy to Vercel, Netlify, etc.
```

## Adding Flashcard Content

All card content lives in `src/data/decks.js`. Each subspecialty has:
- `subsections[]` — groupings within the subspecialty
- `cards[]` within each subsection

### Card Schema

```js
{
  id: 'unique-string',
  front: {
    question: 'What does this CT show?',
    image: { src: 'https://...', alt: 'Description', caption: 'Optional caption' },
    hint: 'Optional hint text',
  },
  back: {
    answer: 'Pulmonary embolism',
    explanation: 'Concise background explanation.',
    keyFact: '💡 The high-yield testable point.',
    images: [{ src, alt, caption }],         // optional
    differentials: [{ dx: 'Diagnosis name' }], // optional
    radiopaediaUrl: 'https://radiopaedia.org/...',
    tags: ['PE', 'CT', 'vascular'],
  }
}
```

### Image Sources

- Radiopaedia article images (with permission / fair use for educational tools)
- Wikimedia Commons radiology images
- Textbook images you own

## Deploying to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## Sharing with Co-residents

1. Push the repo to GitHub
2. Share the GitHub Pages URL (free hosting)
3. Everyone creates their own account — progress is stored locally in each browser
4. For shared/synced progress across devices, a backend (Supabase) can be added later

## Future Expansion

- [ ] Add real subspecialty decks (Neuro, Chest, MSK, Abdominal, Breast, Nucs, IR, Paeds)
- [ ] Supabase backend for cross-device sync
- [ ] Spaced repetition algorithm
- [ ] Search and filter within decks
- [ ] Card editing interface for admins
- [ ] Export flagged cards to PDF
