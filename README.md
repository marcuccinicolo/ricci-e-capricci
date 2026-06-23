# Ricci & Capricci

Landing page per **Ricci & Capricci**, salone di parrucchieri storico a
Pietrasanta (Versilia, Italia), attivo dal 1998.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) per le animazioni

## Design system

Estetica **luxury naturale**, calda e accogliente, con fotografia protagonista
(stile beauty / Instagram premium). Approccio **mobile-first**, molto spazio
vuoto, leggibilità pensata anche per una clientela non giovane.

- **Palette** (bloccata in `tailwind.config.ts`): bianco caldo (`panna`,
  `avorio`), beige/sabbia (`sabbia`, `terra`), nero soft (`inchiostro`, `fumo`)
  e oro leggero (`oro`) come unico accento.
- **Tipografia**: serif elegante _Cormorant Garamond_ per i titoli, sans
  umanista _Mulish_ per il corpo (caricati via `next/font`).
- **Forme**: elementi interattivi a pillola, immagini e superfici a spigolo vivo.
- **Animazioni**: fade-in + slide-up soft all'ingresso nel viewport, zoom
  delicato sulle immagini in hover. Tutto rispetta `prefers-reduced-motion`.
- **Tema**: light (bianco caldo) per tutto il sito, con chiusura scura
  coordinata (Contatti + Footer).

## Struttura

```
.
├── app/
│   ├── globals.css       # base, token e classi (.btn-*, .eyebrow, .container-site)
│   ├── layout.tsx        # layout base: font + Navbar + Footer + SEO
│   └── page.tsx          # homepage che compone le sezioni
├── components/
│   ├── Navbar.tsx        # nav fissa, trasparente sull'hero, solida allo scroll
│   ├── Footer.tsx
│   ├── motion.tsx        # primitive Framer Motion (FadeIn, Stagger, StaggerItem)
│   └── ZoomImage.tsx     # immagine con zoom soft in hover (next/image)
└── sections/
    ├── Hero.tsx          # hero full-screen con immagine
    ├── About.tsx         # "Il Salone": split asimmetrico testo + immagine
    ├── Services.tsx      # servizi: titolo sticky + lista
    ├── Gallery.tsx       # galleria stile Instagram (griglia)
    ├── Testimonial.tsx   # citazione cliente
    └── Contact.tsx       # contatti, orari e CTA di prenotazione
```

## Immagini

Le foto sono **placeholder** (`picsum.photos` con seed descrittivi) da
sostituire con gli scatti reali del salone. Il dominio è già abilitato in
`next.config.mjs`; basta cambiare gli URL nelle sezioni (o spostare le immagini
in `/public` e usare path locali).

## Comandi

```bash
npm install      # installa le dipendenze
npm run dev      # avvia in sviluppo su http://localhost:3000
npm run build    # build di produzione
npm run start    # avvia la build di produzione
```
