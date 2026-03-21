import { useMemo, useState } from "react";

export default function NewJerseyLuxRealtyHomepage() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/myknooen"; // replace with your real Formspree ID
  const [contactStatus, setContactStatus] = useState(null);
  const [valuationStatus, setValuationStatus] = useState({});
  const [activePage, setActivePage] = useState("home");

  const testimonials = [
    {
      quote:
        "Brian made the entire experience feel elevated, strategic, and seamless. His communication and professionalism stood out from day one.",
      name: "Luxury Home Seller",
    },
    {
      quote:
        "We wanted someone who understood both presentation and negotiation. Brian delivered exactly that and helped us move with confidence.",
      name: "Luxury Home Buyer",
    },
    {
      quote:
        "From branding to market insight, Brian approaches real estate like a true advisor. We felt guided the whole way through.",
      name: "Investor Client",
    },
  ];

  const towns = useMemo(
    () => ({
      "sleepy-hollow": {
        eyebrow: "Sleepy Hollow, Plainfield",
        title: "Historic estates and architectural character in Plainfield’s Sleepy Hollow neighborhood.",
        intro:
          "Sleepy Hollow is one of Plainfield’s most historic and architecturally significant neighborhoods, known for grand estates, tree-lined streets, and distinctive homes from the late 19th and early 20th centuries.",
        body: [
          "The neighborhood is admired for its stately residences, large private lots, and remarkable architectural variety. Buyers are often drawn to Sleepy Hollow for its sense of history, visual character, and the opportunity to own a home with real presence and provenance.",
          "For sellers, preparation, presentation, and storytelling are especially important here because these homes offer more than square footage — they offer identity, craftsmanship, and legacy. For buyers, local guidance helps navigate a market where character and condition both matter.",
        ],
        bullets: [
          "Historic estate homes",
          "Large private lots",
          "Architectural significance",
          "Close to Westfield and NYC commuting options",
        ],
        cta1: "Explore Sleepy Hollow",
        cta2: "Request Local Market Insight",
      },
      westfield: {
        eyebrow: "Westfield",
        title: "Elegant homes and a classic suburban lifestyle.",
        intro:
          "Westfield stands out for its refined neighborhoods, vibrant downtown, highly regarded schools, and strong commuter convenience. It balances prestige with warmth, making it especially appealing to families and professionals seeking long-term value.",
        body: [
          "The local housing mix includes classic colonials, updated historic homes, and newer luxury construction — all supported by a market that consistently draws serious buyer interest.",
          "For sellers, strategic preparation and premium presentation are essential. For buyers, timing and local guidance often make the difference in competitive situations.",
        ],
        bullets: [
          "Strong school reputation",
          "Walkable downtown and dining",
          "NYC commuter access",
          "Consistent luxury demand",
        ],
        cta1: "Inquire About Westfield",
        cta2: "Request a Home Valuation",
      },
      "short-hills": {
        eyebrow: "Short Hills",
        title: "Prestige, privacy, and enduring luxury appeal.",
        intro:
          "Short Hills remains one of New Jersey’s most recognized luxury addresses. Buyers are drawn to its estate-style homes, established neighborhoods, exceptional schools, and the quiet confidence the community carries.",
        body: [
          "This is a market where details shape outcomes. Sellers benefit from refined positioning and marketing, while buyers need discretion, local knowledge, and strong execution.",
          "Short Hills continues to attract families and professionals who value long-term stability, architectural scale, and one of the state’s most prestigious residential identities.",
        ],
        bullets: [
          "Premier luxury reputation",
          "Top-ranked schools",
          "Large homes and estate properties",
          "Long-term market strength",
        ],
        cta1: "Explore Short Hills",
        cta2: "Connect With Brian",
      },
    }),
    []
  );

  const pageTitle = {
    home: "New Jersey Lux Realty",
    "sleepy-hollow": "Sleepy Hollow, Plainfield",
    westfield: "Westfield",
    "short-hills": "Short Hills",
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => setActivePage(id)}
      className={`transition ${
        activePage === id ? "text-yellow-300" : "text-zinc-300 hover:text-yellow-300"
      }`}
    >
      {label}
    </button>
  );

  const submitToFormspree = async (event, setStatus, extraFields = {}) => {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.target);

    Object.entries(extraFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const CommunityPage = ({ town }) => {
    const data = towns[town];

    return (
      <>
        <section className="relative border-b border-white/10 bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black" />

            <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 lg:py-36">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-yellow-400/80">New Jersey Lux Realty</p>

                  <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                    Focused expertise in three distinctive markets.
                  </h1>

                  <p className="mt-6 text-xl text-zinc-300">
                    Sleepy Hollow (Plainfield) • Westfield • Short Hills
                  </p>

                  <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                    Representing buyers and sellers with precision, discretion, and a modern luxury approach. Built on discipline, market insight, and a commitment to delivering exceptional results.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <button
                      onClick={() => setActivePage("sleepy-hollow")}
                      className="rounded-full bg-yellow-500 px-8 py-4 text-center font-semibold text-black transition hover:scale-[1.02]"
                    >
                      Explore Markets
                    </button>

                    <a
                      href="#contact"
                      className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:border-yellow-400/40 hover:text-yellow-300"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="rounded-[2.5rem] border border-white/10 bg-zinc-900 p-3">
                    <img
                      src="/images/brian.png"
                      alt="Brian DeMarco"
                      className="h-[520px] w-full rounded-[2rem] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400/80">Market Overview</p>
              <h2 className="mt-3 text-4xl font-semibold">Understanding the local market</h2>

              <div className="mt-8 space-y-6 text-zinc-300">
                {data.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-yellow-400/80">Highlights</p>

              <ul className="mt-6 space-y-4 text-zinc-300">
                {data.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-zinc-950/60">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400/80">Featured Listings</p>
              <h2 className="mt-3 text-4xl font-semibold">A polished presentation for standout homes</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-black"
                >
                  <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: "url('/images/sleepy-hollow.jpg')" }} />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{data.eyebrow} Property</h3>
                    <p className="mt-3 text-zinc-400">Luxury presentation placeholder</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <button onClick={() => setActivePage("home")}>
            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400/80">New Jersey Lux Realty</p>
            <p className="mt-1 text-left text-lg font-semibold">Brian DeMarco</p>
          </button>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <NavLink id="home" label="Home" />
            <NavLink id="sleepy-hollow" label="Sleepy Hollow, Plainfield" />
            <NavLink id="westfield" label="Westfield" />
            <NavLink id="short-hills" label="Short Hills" />
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-yellow-400/40 hover:text-yellow-300"
          >
            Let’s Connect
          </a>
        </div>
      </header>

      {activePage === "home" ? (
        <>
          <section className="relative border-b border-white/10 bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-400/80">Focused Luxury Real Estate</p>

                <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                  Sleepy Hollow (Plainfield), Westfield & Short Hills.
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                  A focused real estate platform built around three distinctive communities, with a clean luxury presentation and strategic guidance for buyers and sellers across Sleepy Hollow in Plainfield, Westfield, and Short Hills.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => setActivePage("sleepy-hollow")}
                    className="rounded-full bg-yellow-500 px-7 py-4 text-center font-medium text-black transition hover:scale-[1.02]"
                  >
                    Explore Communities
                  </button>

                  <a
                    href="#contact"
                    className="rounded-full border border-white/15 px-7 py-4 text-center font-medium text-white transition hover:border-yellow-400/40 hover:text-yellow-300"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-zinc-950/60">
            <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
              <div className="grid gap-6 md:grid-cols-3">
                {Object.entries(towns).map(([key, town]) => (
                  <button
                    key={key}
                    onClick={() => setActivePage(key)}
                    className="rounded-[2rem] border border-white/10 bg-black p-8 text-left transition hover:border-yellow-400/30 hover:bg-zinc-900"
                  >
                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-400/80">Community</p>

                    <h3 className="mt-4 text-3xl font-semibold">{town.eyebrow}</h3>

                    <p className="mt-4 leading-7 text-zinc-400">{town.intro}</p>

                    <span className="mt-6 inline-block text-sm text-white/80">Open page →</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <CommunityPage town={activePage} />
      )}

      <section id="contact" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400/80">Contact</p>

              <h2 className="mt-3 text-4xl font-semibold">
                Let’s talk about {pageTitle[activePage] || "your next move"}
              </h2>

              <div className="mt-8 space-y-4 text-lg">
                <p><span className="text-zinc-500">Phone:</span> (908) 812-5014</p>
                <p><span className="text-zinc-500">Email:</span> briannjrealtor@gmail.com</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8">
              <form
                onSubmit={(e) => submitToFormspree(e, setContactStatus, { formType: "contact" })}
                className="grid gap-4"
              >
                <input name="name" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-zinc-500" placeholder="Your name" required />
                <input name="email" type="email" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-zinc-500" placeholder="Email" required />
                <input name="phone" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-zinc-500" placeholder="Phone number" />
                <textarea name="message" className="min-h-[140px] rounded-xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-zinc-500" placeholder="Tell me about your goals" required />

                <button className="mt-2 rounded-full bg-yellow-500 px-6 py-4 font-medium text-black transition hover:scale-[1.02]">
                  Send Inquiry
                </button>

                {contactStatus === "sending" && (
                  <p className="text-sm text-yellow-400">Sending...</p>
                )}
                {contactStatus === "success" && (
                  <p className="text-sm text-green-400">Message sent successfully.</p>
                )}
                {contactStatus === "error" && (
                  <p className="text-sm text-red-400">Something went wrong. Try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400/80">Seller Lead Pages</p>
            <h2 className="mt-3 text-4xl font-semibold">What Is Your Home Worth?</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              These pages are designed to capture seller leads by pairing local market positioning with a simple valuation form. Each town gets its own focused message and call to action.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                slug: 'sleepy-hollow-plainfield',
                town: 'Sleepy Hollow, Plainfield',
                headline: 'What Is Your Sleepy Hollow Home Worth?',
                text: 'A valuation page tailored to historic homes, architectural character, and the importance of preparation before going to market.',
              },
              {
                slug: 'westfield',
                town: 'Westfield',
                headline: 'What Is Your Westfield Home Worth?',
                text: 'A seller-focused page centered on pricing strategy, presentation, demand, and the value of thoughtful market timing.',
              },
              {
                slug: 'short-hills',
                town: 'Short Hills',
                headline: 'What Is Your Short Hills Home Worth?',
                text: 'A luxury valuation page built around discreet marketing, premium positioning, and high-level buyer expectations.',
              },
            ].map((item) => (
              <div key={item.town} className="rounded-[2rem] border border-white/10 bg-black p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400/80">{item.town}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.headline}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
                  <form
                    onSubmit={(e) =>
                      submitToFormspree(
                        e,
                        (nextStatus) =>
                          setValuationStatus((prev) => ({ ...prev, [item.slug]: nextStatus })),
                        {
                          formType: "home-valuation",
                          market: item.town,
                          subject: `${item.town} Home Valuation Request`,
                        }
                      )
                    }
                    className="grid gap-3"
                  >
                    <input name="propertyAddress" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-zinc-500" placeholder="Property address" required />
                    <input name="name" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-zinc-500" placeholder="Name" required />
                    <input name="email" type="email" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-zinc-500" placeholder="Email" required />
                    <input name="phone" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-zinc-500" placeholder="Phone number" />
                    <button className="rounded-full bg-yellow-500 px-5 py-3 font-medium text-black transition hover:scale-[1.02]">
                      Request Home Value
                    </button>
                    {valuationStatus[item.slug] === "sending" && (
                      <p className="text-sm text-yellow-400">Sending...</p>
                    )}
                    {valuationStatus[item.slug] === "success" && (
                      <p className="text-sm text-green-400">Request sent successfully.</p>
                    )}
                    {valuationStatus[item.slug] === "error" && (
                      <p className="text-sm text-red-400">Something went wrong. Try again.</p>
                    )}
                  </form>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-yellow-500/20 bg-black p-8">
            <h3 className="text-2xl font-semibold">Recommended production setup</h3>
            <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
              Both the main contact form and all three valuation forms are now wired to Formspree. Make sure your project includes <span className="text-white">/public/images/brian.png</span> and <span className="text-white">/public/images/sleepy-hollow.jpg</span> so the live deployment can load your real assets properly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
