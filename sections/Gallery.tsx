import Link from "next/link";
import { FadeIn } from "@/components/motion";
import ZoomImage from "@/components/ZoomImage";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="galleria" className="overflow-hidden bg-panna py-24 sm:py-32 lg:py-40">
      {/* Intestazione (contenuta) */}
      <div className="container-site">
        <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">@ricci_e_capricci_parrucchiere</span>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-inchiostro sm:text-5xl">
              I nostri lavori
            </h2>
            <p className="mt-4 max-w-md text-fumo">
              Tagli, colori e acconciature realizzati nel nostro salone.
              Scorri per vederli tutti.
            </p>
          </div>
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wider text-oro transition-colors hover:text-inchiostro"
          >
            Seguici su Instagram
          </Link>
        </FadeIn>
      </div>

      {/*
        Scroller orizzontale fluido (full-bleed), con snap leggero.
        Mappa l'array images.gallery: aggiungere foto future è automatico.
      */}
      <FadeIn className="mt-12 sm:mt-14">
        <ul
          className="no-scrollbar flex snap-x snap-proximity gap-4 overflow-x-auto scroll-pl-6 px-6 pb-2 sm:gap-5 sm:scroll-pl-10 sm:px-10"
          aria-label="Galleria dei lavori del salone"
        >
          {images.gallery.map((src, i) => (
            <li
              key={src}
              className="w-[80vw] shrink-0 snap-start sm:w-[400px] lg:w-[460px]"
            >
              <ZoomImage
                src={src}
                alt={`Lavoro su capelli realizzato nel salone Ricci & Capricci (${i + 1})`}
                sizes="(max-width: 640px) 80vw, 460px"
                rounded
                className="aspect-[4/5] w-full"
              />
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
