import { siteConfig } from "../data/siteConfig";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal py-16 text-brand-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="gap-12 lg:grid lg:grid-cols-3">
          {/* Brand & info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-cream">
              {siteConfig.businessName}
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Polish heart, Canadian soul — fresh-cut fries, homemade perogies, and classic chip wagon favourites.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p>
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.province} {siteConfig.address.postalCode}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-brand-cream"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-brand-cream uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours summary & social */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-brand-cream uppercase">
              Hours
            </h3>
            <div className="mt-4 space-y-1.5 text-sm">
              <p>Mon–Sat: 11:00 a.m. – 7:00 p.m.</p>
              <p>Sun: 12:00 p.m. – 5:00 p.m.</p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream/10 transition-colors hover:bg-brand-cream/20"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-brand-cream/10 pt-8">
          <div className="flex flex-col items-center gap-3 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
            <p className="text-brand-cream/50">
              {siteConfig.paymentNotice}
            </p>
            <p className="text-brand-cream/50">
              &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
