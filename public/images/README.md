# Foto del salone

Metti qui le foto reali (es. scaricate da Instagram
@ricci_e_capricci_parrucchiere) e collegale dal file `lib/images.ts`.

## Nomi consigliati

| File suggerito        | Dove appare        | Formato ideale | Misura indicativa |
| --------------------- | ------------------ | -------------- | ----------------- |
| `hero.jpg`            | Hero a tutto schermo | orizzontale  | ~1920 x 1280      |
| `salone.jpg`          | Sezione "Il Salone"  | verticale    | ~1200 x 1400      |
| `vetrina.jpg`         | Sezione Contatti     | verticale    | ~1200 x 1400      |
| `galleria-1.jpg` … `galleria-6.jpg` | Galleria | quadrato     | ~800 x 800        |

## Come collegarle

In `lib/images.ts` sostituisci gli URL `picsum.photos` con i path locali, es.:

```ts
hero: "/images/hero.jpg",
salone: "/images/salone.jpg",
vetrina: "/images/vetrina.jpg",
gallery: [
  "/images/galleria-1.jpg",
  "/images/galleria-2.jpg",
  // ...
],
```

I file in `/public` sono serviti dalla radice del sito: `/public/images/hero.jpg`
diventa `/images/hero.jpg`.
