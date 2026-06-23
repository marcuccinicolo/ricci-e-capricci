/**
 * Manifest centrale delle immagini del sito (tutte foto reali del salone).
 *
 * GERARCHIA VISIVA:
 *   HERO    = interno reale del salone (autentico, accogliente)
 *   STORIA  = un lavoro reale su capelli (la cura, il mestiere)
 *   GALLERY = lavori reali su capelli (3 foto)
 *
 * Per sostituire un'immagine basta cambiare il file in /public/images/
 * mantenendo lo stesso nome, oppure aggiornare il path qui sotto.
 *
 * Immagini disponibili non usate (accenti opzionali per il futuro):
 *   /images/aesthetic.jpg, /images/milkshake-day.jpg, /images/milkshake-blond.jpg
 */

export const images = {
  // Hero: interno reale del salone.
  hero: "/images/interno-salone.jpg",

  // Sezione "La nostra storia": un lavoro reale su capelli.
  storia: "/images/capelli-ricci.jpg",

  // Gallery "I nostri lavori": lavori reali su capelli.
  gallery: [
    "/images/capelli-mossi.jpg",
    "/images/capelli-castano.jpg",
    "/images/capelli-raccolto.jpg",
  ],
} as const;
