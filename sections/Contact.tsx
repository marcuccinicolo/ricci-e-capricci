import { Phone, MapPin, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/motion";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contatti" className="bg-inchiostro py-24 text-panna sm:py-32 lg:py-40">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Info + CTA */}
        <FadeIn>
          <h2 className="text-4xl font-medium leading-tight text-panna sm:text-5xl">
            Vieni a trovarci
          </h2>
          <p className="mt-6 max-w-md text-panna/70">
            Ti aspettiamo nel nostro salone a Pietrasanta. Per un appuntamento,
            chiamaci: saremo felici di accoglierti.
          </p>

          {/* Dettagli */}
          <dl className="mt-10 space-y-6 border-t border-panna/15 pt-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-oro" />
              <div>
                <dt className="eyebrow">Dove siamo</dt>
                <dd className="mt-1 text-panna/90">
                  {site.addressStreet}
                  <br />
                  {site.addressCity}
                  <br />
                  {site.addressCountry}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-oro" />
              <div>
                <dt className="eyebrow">Telefono</dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="text-panna/90 transition-colors hover:text-oro"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-panna px-8 py-4 text-sm font-medium uppercase tracking-wider text-inchiostro transition-colors duration-300 ease-soft hover:bg-sabbia focus:outline-none focus-visible:ring-2 focus-visible:ring-panna"
            >
              <Phone weight="fill" className="h-5 w-5" />
              Chiama ora
            </a>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost gap-2"
            >
              <MapPin weight="fill" className="h-5 w-5" />
              Apri in Google Maps
            </a>
          </div>
        </FadeIn>

        {/* Mappa Google */}
        <FadeIn delay={0.1} className="min-h-[340px]">
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full w-full overflow-hidden rounded-2xl border border-panna/15"
            aria-label="Apri la posizione del salone su Google Maps"
          >
            <iframe
              title="Mappa del salone Ricci & Capricci a Pietrasanta"
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none h-full min-h-[340px] w-full"
            />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-inchiostro/85 px-4 py-2 text-xs uppercase tracking-wider text-panna backdrop-blur transition-colors group-hover:bg-inchiostro">
              Indicazioni
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
