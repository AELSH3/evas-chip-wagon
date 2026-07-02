import { siteConfig } from "../data/siteConfig";
import baconCheeseburgerImg from "../assets/bacon-cheeseburger.png";
import cabbageRollsImg from "../assets/cabbage-rolls.png";
import burgerImg from "../assets/burger.png";
import cabbageRollCloseImg from "../assets/cabbage-roll-close.png";

const labelColors: Record<string, string> = {
  "Fan Favourite": "bg-brand-red text-white",
  "Polish Classic": "bg-brand-green text-white",
  Popular: "bg-brand-gold text-white",
  Classic: "bg-brand-brown text-white",
};

const dishImages = [baconCheeseburgerImg, cabbageRollsImg, burgerImg, cabbageRollCloseImg];

export default function FeaturedDishes() {
  return (
    <section id="features" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-red sm:text-4xl">
            What to Order
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-brand-gold" />
            <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.09 6.26L21 9.27l-5.18 4.73L17.82 22 12 17.77 6.18 22l1.09-7.95L2 9.27l6.91-1.01z" />
            </svg>
            <span className="h-px w-12 bg-brand-gold" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.featuredDishes.map((dish, i) => (
            <div
              key={dish.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dishImages[i % dishImages.length]}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold ${
                    labelColors[dish.label] ?? "bg-brand-green text-white"
                  }`}
                >
                  {dish.label}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal-light">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
