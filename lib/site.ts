/**
 * Dati del salone, centralizzati.
 * Unico punto da aggiornare per nome, telefono, indirizzo e mappa.
 */

const mapsQuery =
  "Ricci E Capricci Di Silvia Bertozzi, Via Gian Lorenzo Bernini 37, 55045 Pietrasanta LU";

export const site = {
  // Nome breve (logo/brand) e nome completo dell'attività.
  name: "Ricci & Capricci",
  legalName: "Ricci E Capricci Di Silvia Bertozzi",
  since: 1998,

  // Telefono
  phoneDisplay: "0584 793261",
  phoneHref: "tel:+390584793261",

  // Indirizzo (su più righe)
  addressStreet: "Via Gian Lorenzo Bernini 37",
  addressCity: "55045 Pietrasanta (LU)",
  addressCountry: "Italia",

  // Google Maps: embed (iframe) + link per aprire le indicazioni
  mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    mapsQuery
  )}&output=embed`,
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapsQuery
  )}`,

  // Recensioni Google
  rating: 5.0,
  reviewsCount: 9,

  // Social
  instagram: "https://www.instagram.com/ricci_e_capricci_parrucchiere",
} as const;
