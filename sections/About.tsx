import { FadeIn } from "@/components/motion";
import ZoomImage from "@/components/ZoomImage";
import { images } from "@/lib/images";

export default function About() {
  return (
    <section id="storia" className="bg-panna py-24 sm:py-32 lg:py-40">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Immagine: mood del brand (milk_shake) */}
        <FadeIn className="lg:col-span-7" y={36}>
          <ZoomImage
            src={images.storia}
            alt="Prodotti naturali milk_shake usati nel salone Ricci & Capricci"
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="aspect-[4/5] w-full"
          />
        </FadeIn>

        {/* Testo emozionale */}
        <FadeIn className="lg:col-span-5" delay={0.1}>
          <h2 className="text-4xl font-medium leading-tight text-inchiostro sm:text-5xl">
            La nostra storia, dal 1998
          </h2>
          <p className="mt-6 text-fumo">
            Da oltre vent&apos;anni siamo un punto di riferimento per le donne e
            gli uomini della Versilia. A Pietrasanta, tra arte e tradizione,
            abbiamo costruito un luogo dove sentirsi accolti e a proprio agio.
          </p>
          <p className="mt-4 text-fumo">
            La fiducia di chi torna da noi stagione dopo stagione è il nostro
            orgoglio più grande: la stessa cura, la stessa passione, dal primo
            giorno.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-terra/50 pt-8">
            <div>
              <dt className="font-serif text-4xl text-oro">25+</dt>
              <dd className="mt-1 text-sm text-fumo">anni di esperienza</dd>
            </div>
            <div>
              <dt className="font-serif text-4xl text-oro">Pietrasanta</dt>
              <dd className="mt-1 text-sm text-fumo">nel cuore della Versilia</dd>
            </div>
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
