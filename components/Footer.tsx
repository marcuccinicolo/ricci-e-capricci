import Link from "next/link";
import { site } from "@/lib/site";

const year = new Date().getFullYear();

const links = [
  { label: "Storia", href: "#storia" },
  { label: "Servizi", href: "#servizi" },
  { label: "Galleria", href: "#galleria" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Contatti", href: "#contatti" },
];

export default function Footer() {
  return (
    <footer className="border-t border-panna/10 bg-inchiostro text-panna">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl font-semibold">
            Ricci <span className="text-oro">&</span> Capricci
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-panna/60">
            Salone di parrucchieri a Pietrasanta, nel cuore della Versilia.
            Dal 1998.
          </p>
        </div>

        {/* Navigazione */}
        <nav aria-label="Footer">
          <h4 className="eyebrow">Naviga</h4>
          <ul className="mt-4 space-y-2 text-sm text-panna/80">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-oro">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contatti rapidi */}
        <div>
          <h4 className="eyebrow">Contatti</h4>
          <address className="mt-4 space-y-2 not-italic text-sm text-panna/80">
            <p>
              {site.addressStreet}
              <br />
              {site.addressCity}
            </p>
            <p>
              <a href={site.phoneHref} className="transition-colors hover:text-oro">
                {site.phoneDisplay}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-panna/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-panna/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. Tutti i diritti riservati.</p>
          <p>Pietrasanta · Versilia · dal 1998</p>
        </div>
      </div>
    </footer>
  );
}
