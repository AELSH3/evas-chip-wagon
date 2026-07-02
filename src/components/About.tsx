const stats = [
  { value: "4.9", label: "Google Stars" },
  { value: "264+", label: "Reviews" },
  { value: "Family", label: "Run" },
];

export default function About() {
  return (
    <section id="about" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="items-center gap-16 lg:grid lg:grid-cols-2">
          {/* Decorative panel instead of image */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red via-brand-brown to-brand-green p-12 sm:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.15),transparent_70%)]" />
            <div className="relative text-center">
              <svg
                className="mx-auto h-20 w-20 text-white/30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <p className="mt-6 font-heading text-2xl font-bold text-white sm:text-3xl">
                Since Day One
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                Serving the Gloucester community with pride, one poutine at a time.
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="mt-10 lg:mt-0">
            <h2 className="font-heading text-3xl font-bold text-brand-red sm:text-4xl">
              A Local Favourite on Bank Street
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal-light">
              <p>
                Eva's Chip Wagon is a family-run chip wagon on Bank Street in
                Gloucester, bringing together the best of Polish home cooking
                and classic Canadian chip wagon fare. Every pierogi is
                hand-pinched, every batch of fries is cut fresh on site, and the
                gravy is made from scratch.
              </p>
              <p>
                What started as a love for traditional Polish recipes has grown
                into one of the highest-rated food spots in Ottawa. From the
                signature Bacon and Fried Onion Poutine to the hearty cabbage
                rolls, every dish is made with the same care you'd find at a
                family dinner table.
              </p>
              <p>
                With outdoor picnic tables, a pet-friendly atmosphere, and prices
                that won't break the bank, Eva's is the kind of place where
                locals come back week after week — and bring their friends.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-cream-dark pt-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-brand-red sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-brand-charcoal-light">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
