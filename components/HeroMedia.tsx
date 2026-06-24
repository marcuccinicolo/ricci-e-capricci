"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { images } from "@/lib/images";

/**
 * MEDIA LAYER della hero — foto reale del salone con Ken Burns.
 *
 * Scelta: la foto reale dell'interno valorizza il salone vero (autenticità),
 * con un movimento Ken Burns lentissimo (~32s) che dà vita alla pagina senza
 * mai distrarre. Niente video, niente scroll, niente effetti vistosi.
 *
 * prefers-reduced-motion: nessun movimento, foto perfettamente statica.
 */
export default function HeroMedia() {
  const reduce = useReducedMotion();

  return (
    <div data-hero-media className="hero-media absolute inset-0">
      {/* Foto reale del salone, animata in Ken Burns (zoom impercettibile) */}
      <div className={`absolute inset-0 ${reduce ? "" : "hero-kenburns"}`}>
        <Image
          src={images.hero}
          alt="Interno del salone Ricci & Capricci a Pietrasanta"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Scrim caldo per leggibilità del testo (verticale + da sinistra) */}
      <div className="absolute inset-0 bg-gradient-to-t from-inchiostro/90 via-inchiostro/45 to-inchiostro/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-inchiostro/55 via-inchiostro/10 to-transparent" />
    </div>
  );
}
