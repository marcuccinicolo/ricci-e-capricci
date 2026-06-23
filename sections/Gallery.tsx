import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import ZoomImage from "@/components/ZoomImage";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="galleria" className="bg-panna py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">@ricci_e_capricci_parrucchiere</span>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-inchiostro sm:text-5xl">
              I nostri lavori
            </h2>
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

        <Stagger
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
          amount={0.1}
        >
          {images.gallery.map((src, i) => (
            <StaggerItem key={i}>
              <ZoomImage
                src={src}
                alt="Lavoro su capelli realizzato nel salone Ricci & Capricci"
                sizes="(max-width: 640px) 100vw, 33vw"
                className="aspect-[4/5] w-full"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
