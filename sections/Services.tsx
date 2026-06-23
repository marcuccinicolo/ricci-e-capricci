import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const services = [
  {
    name: "Taglio donna",
    desc: "Tagli su misura che valorizzano il viso e la naturalezza dei capelli.",
  },
  {
    name: "Taglio uomo",
    desc: "Stile curato e definito, con attenzione a ogni dettaglio.",
  },
  {
    name: "Colore",
    desc: "Colorazioni e riflessi con prodotti delicati, dal risultato luminoso.",
  },
  {
    name: "Piega",
    desc: "Pieghe morbide e durature, pensate per ogni occasione.",
  },
  {
    name: "Trattamenti",
    desc: "Rituali nutrienti che restituiscono forza e lucentezza.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="bg-avorio py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <FadeIn className="max-w-2xl">
          <h2 className="text-4xl font-medium leading-tight text-inchiostro sm:text-5xl">
            I nostri servizi
          </h2>
          <p className="mt-6 text-fumo">
            Ogni servizio nasce dall&apos;ascolto: prendiamo il tempo che serve
            per capire i tuoi capelli e il tuo stile.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.name}>
              <div className="group h-full border border-terra/50 bg-panna p-8 transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-oro hover:shadow-[0_18px_40px_-20px_rgba(33,30,26,0.35)]">
                <h3 className="text-2xl font-medium text-inchiostro">
                  {service.name}
                </h3>
                <p className="mt-3 text-fumo">{service.desc}</p>
                <span className="mt-6 block h-px w-10 bg-terra transition-all duration-300 ease-soft group-hover:w-20 group-hover:bg-oro" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
