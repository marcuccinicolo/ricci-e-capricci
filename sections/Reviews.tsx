import { Star, GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";

const reviews = [
  {
    name: "Laila Benvenuti",
    text: "Soddisfatta, buona l'accoglienza e l'ambiente, lavoro ben fatto.",
  },
  {
    name: "Paola",
    text: "Sempre perfetta e affidabile! Consigliatissimo.",
  },
  {
    name: "Katia D'Angiolo",
    text: "Sempre perfetta! Brava Silvia...",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-oro ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} weight="fill" className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="recensioni" className="bg-avorio py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        {/* Intestazione + sintesi valutazione */}
        <FadeIn className="max-w-2xl">
          <h2 className="text-4xl font-medium leading-tight text-inchiostro sm:text-5xl">
            Dicono di noi
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Stars className="text-lg" />
            <p className="text-inchiostro">
              <span className="font-serif text-2xl text-oro">
                {site.rating.toFixed(1)}
              </span>
              <span className="text-fumo"> / 5</span>
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm text-fumo">
              <GoogleLogo weight="bold" className="h-4 w-4" />
              basato su {site.reviewsCount} recensioni Google
            </span>
          </div>
        </FadeIn>

        {/* Recensioni */}
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <figure className="flex h-full flex-col border border-terra/50 bg-panna p-8">
                <Stars />
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug text-inchiostro">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm uppercase tracking-wider text-fumo">
                  {review.name}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
