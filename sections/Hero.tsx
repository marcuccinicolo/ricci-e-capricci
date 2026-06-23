import Image from "next/image";
import Link from "next/link";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/motion";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      {/*
        MEDIA LAYER (full screen).
        Oggi: immagine reale del salone.
        In futuro, per la "hero video cinematica", basta sostituire questo
        <Image> con un <video autoPlay muted loop playsInline> mantenendo
        lo stesso wrapper e lo scrim sottostante.
      */}
      <Image
        src={images.hero}
        alt="Interno del salone Ricci & Capricci a Pietrasanta"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      {/* Scrim caldo per leggibilità del testo */}
      <div className="absolute inset-0 bg-gradient-to-t from-inchiostro/85 via-inchiostro/35 to-inchiostro/45" />

      {/* Contenuto ancorato in basso a sinistra */}
      <div className="container-site relative flex min-h-[100dvh] flex-col justify-end pb-24 pt-28 sm:pb-28">
        <FadeIn className="max-w-2xl">
          <span className="eyebrow">Pietrasanta · Versilia</span>
          <h1 className="mt-5 text-5xl font-medium leading-[1.05] text-panna sm:text-6xl lg:text-7xl">
            Ricci <span className="text-oro">&</span> Capricci
          </h1>
          <p className="mt-4 text-xl text-panna/90 sm:text-2xl">
            Parrucchieri a Pietrasanta dal 1998
          </p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-panna/75">
            Esperienza, cura e bellezza naturale in Versilia.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-panna px-8 py-4 text-sm font-medium uppercase tracking-wider text-inchiostro transition-colors duration-300 ease-soft hover:bg-sabbia focus:outline-none focus-visible:ring-2 focus-visible:ring-panna"
            >
              <Phone weight="fill" className="h-5 w-5" />
              Chiama ora
            </a>
            <Link href="#contatti" className="btn-ghost">
              Vieni a trovarci
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
