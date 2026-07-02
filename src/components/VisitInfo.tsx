import type { ReactNode } from "react";
import { siteConfig } from "../data/siteConfig";

const cards: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Outdoor Seating",
    text: "Enjoy your meal at our picnic tables. A great spot to sit, relax, and savour your poutine.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Parking Available",
    text: "Convenient parking right at the chip wagon. Drive up, grab your food, and enjoy.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Pet Friendly",
    text: "Bring your furry friends along! Our outdoor area is pet-friendly and we love seeing them.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="4" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="4" cy="8" r="2" />
        <circle cx="8" cy="14" r="2" />
        <circle cx="14" cy="14" r="2" />
        <path d="M9 18c0 2.2 1.3 4 3 4s3-1.8 3-4c0-1.5-1.3-2-3-2s-3 .5-3 2z" />
      </svg>
    ),
  },
  {
    title: "Cash & Cards",
    text: "We accept both cash and card payments. Note: a small surcharge may apply to credit cards.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Peanut Oil Notice",
    text: "Our fries and fried items are cooked in peanut oil. Please inform us of any peanut allergies before ordering.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function VisitInfo() {
  return (
    <section id="visit" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-red sm:text-4xl">
            Planning Your Visit
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-brand-gold" />
            <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="h-px w-12 bg-brand-gold" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-brand-cream-dark bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                {card.icon}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-brand-charcoal">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal-light">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-red px-6 py-8 text-center sm:px-12">
          <p className="text-lg leading-relaxed font-medium text-white">
            No reservations needed — just come by, order at the window, and enjoy
            your meal at our picnic tables or take it to go.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-brand-charcoal-light">
          {siteConfig.paymentNotice}
        </p>
      </div>
    </section>
  );
}
