/**
 * Manifest centrale delle immagini del sito (tutte foto reali del salone).
 *
 * GERARCHIA VISIVA:
 *   HERO    = interno reale del salone (atmosfera, accoglienza)
 *   STORIA  = immagine "milk_shake" (mood del brand: elegante, caldo, premium)
 *   GALLERY = tutti i lavori reali su capelli (scroll orizzontale)
 *
 * Per aggiungere un lavoro futuro: metti il file in /public/images/ e
 * aggiungi il path all'array `gallery` qui sotto.
 *
 * Immagini disponibili tenute come accenti opzionali per il futuro:
 *   /images/milkshake-blond.jpg, /images/aesthetic.jpg
 */

export const images = {
  // Hero: interno reale del salone.
  hero: "/images/interno-salone.jpg",

  // Sezione "La nostra storia": immagine milk_shake (mood del brand).
  storia: "/images/milkshake-day.jpg",

  // Gallery "I nostri lavori": tutti i lavori reali su capelli.
  gallery: [
    "/images/capelli-lunghi.jpg",
    "/images/capelli-castano.jpg",
    "/images/capelli-raccolto.jpg",
    "/images/capelli-raccolto-ricci.jpg",
    "/images/capelli-raccolto-biondo.jpg",
    "/images/capelli-ricci.jpg",
    "/images/capelli-mossi.jpg",
  ],
} as const;
