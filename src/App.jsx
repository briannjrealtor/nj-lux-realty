import React, { useEffect, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myknooen";

const featuredListings = [
  {
    title: "Sleepy Hollow Estate",
    town: "Plainfield, NJ",
    price: "$1,895,000",
    details: "5 Beds • 4 Baths • Resort-Style Pool",
    image: "/images/sleepy-hollow.jpg",
    link: "#contact",
  },
  {
    title: "Westfield Luxury Colonial",
    town: "Westfield, NJ",
    price: "$1,425,000",
    details: "4 Beds • 3.5 Baths • Updated Interiors",
    image: "/images/sleepy-hollow.jpg",
    link: "#contact",
  },
  {
    title: "Short Hills Custom Residence",
    town: "Short Hills, NJ",
    price: "$2,750,000",
    details: "6 Beds • 5.5 Baths • Prime Location",
    image: "/images/sleepy-hollow.jpg",
    link: "#contact",
  },
];

const reviewHighlights = [
  {
    quote:
      "Brian brings professionalism, preparation, and strong communication to every step of the process.",
    source: "Client Experience",
  },
  {
    quote:
      "Responsive, strategic, and trustworthy. We always felt informed and confident throughout our transaction.",
    source: "Buyer Review",
  },
  {
    quote:
      "A polished approach with excellent attention to detail and clear market insight.",
    source: "Seller Review",
  },
];

export default function App() {
  const [status, setStatus] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={styles.page}>
      <header
        style={{
          ...styles.header,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "12px" : "0",
        }}
      >
        <div style={styles.logoWrap}>
          <div style={styles.logoMark}>▲</div>
          <div>
            <div style={styles.brand}>New Jersey Lux Realty</div>
            <div style={styles.brandSub}>
              Luxury Homes • Real Estate • Investments
            </div>
          </div>
        </div>

        <div
          style={{
            ...styles.headerContact,
            textAlign: isMobile ? "left" : "right",
          }}
        >
          <div>Brian DeMarco</div>
          <a href="tel:19088125014" style={styles.contactLink}>
            (908) 812-5014
          </a>
          <a href="mailto:briannjrealtor@gmail.com" style={styles.contactLink}>
            briannjrealtor@gmail.com
          </a>
        </div>
      </header>

      <section
        style={{
          ...styles.hero,
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.28) 100%), url('/images/sleepy-hollow.jpg')",
        }}
      >
        <div
          style={{
            ...styles.heroInner,
            gridTemplateColumns: "1fr",
            padding: isMobile ? "42px 20px 48px" : "72px 32px 80px",
            gap: isMobile ? "28px" : "42px",
          }}
        >
          <div style={styles.heroLeft}>
            <p style={styles.eyebrow}>NEW JERSEY LUXURY REAL ESTATE</p>
            <h1
              style={{
                ...styles.heroTitle,
                fontSize: isMobile ? "38px" : "60px",
                maxWidth: isMobile ? "100%" : "760px",
              }}
            >
              Elevated representation for buyers, sellers, and investors.
            </h1>
            <p
              style={{
                ...styles.heroText,
                fontSize: isMobile ? "17px" : "18px",
              }}
            >
              New Jersey Lux Realty is built around precision, presentation, and
              local market expertise. From standout homes to strategic
              opportunities, every move is handled with intention.
            </p>

            <div style={styles.heroButtons}>
              <a href="#contact" style={styles.primaryBtn}>
                Schedule a Consultation
              </a>
              <a href="#valuation" style={styles.primaryBtn}>
                What’s My Home Worth?
              </a>
              <a href="#markets" style={styles.secondaryBtn}>
                Explore Markets
              </a>
            </div>
          </div>

        
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div
          style={{
            ...styles.sectionInner,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "28px" : "48px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img
  src="/images/brian.png"
  alt="Brian DeMarco"
  style={{
    width: "100%",
    maxWidth: "520px",
    borderRadius: "22px",
    objectFit: "cover",
    boxShadow: "0 25px 70px rgba(0,0,0,0.5)",
  }}
/>
          </div>

          <div>
            <p style={styles.sectionEyebrow}>ABOUT</p>

            <h2
              style={{
                ...styles.sectionTitle,
                fontSize: isMobile ? "30px" : "42px",
              }}
            >
              A disciplined approach. A strategic advantage.
            </h2>

            <p style={styles.sectionText}>
              My background in the Marine Corps, law enforcement, aviation, and
              academics gives me a unique edge in real estate — and partnering
              with my uncle, who has spent more than 30 years mastering this
              industry, elevates that even further.
            </p>

            <p style={styles.sectionText}>
              Clients get the best of both worlds: seasoned experience, paired
              with direct execution.
            </p>

            <p style={styles.sectionText}>
              Our office completed over $1.1 billion of real estate transactions
              in 2025, using strategic tools to deliver exceptional results.
            </p>

            <p style={styles.sectionText}>
              Find out what your home could be worth with the right
              preparation—I’d love to show you what’s possible.
            </p>
          </div>
        </div>
      </section>

      <section id="markets" style={styles.darkSection}>
        <div style={styles.sectionInner}>
          <p style={styles.sectionEyebrow}>FEATURED MARKETS</p>
          <h2
            style={{
              ...styles.sectionTitle,
              fontSize: isMobile ? "30px" : "40px",
            }}
          >
            Distinctive communities. Tailored strategy.
          </h2>

          <div
            style={{
              ...styles.cardGrid,
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            }}
          >
            <div style={styles.marketCard}>
              <h3 style={styles.cardTitle}>Sleepy Hollow</h3>
              <p style={styles.cardText}>
                Character, privacy, and standout homes in one of the area’s most
                recognizable neighborhoods.
              </p>
            </div>

            <div style={styles.marketCard}>
              <h3 style={styles.cardTitle}>Westfield</h3>
              <p style={styles.cardText}>
                A highly desirable market known for lifestyle, community appeal,
                and strong buyer demand.
              </p>
            </div>

            <div style={styles.marketCard}>
              <h3 style={styles.cardTitle}>Short Hills</h3>
              <p style={styles.cardText}>
                Luxury positioning, premium presentation, and elevated client
                expectations at the high end of the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <p style={styles.sectionEyebrow}>SERVICES</p>
          <h2
            style={{
              ...styles.sectionTitle,
              fontSize: isMobile ? "30px" : "40px",
            }}
          >
            Representation designed around results.
          </h2>

          <div
            style={{
              ...styles.cardGrid,
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            }}
          >
            <div style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>Buy</h3>
              <p style={styles.cardText}>
                Clear guidance, strong positioning, and a focused search
                strategy tailored to your goals.
              </p>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>Sell</h3>
              <p style={styles.cardText}>
                Thoughtful pricing, presentation, and marketing designed to
                maximize visibility and value.
              </p>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>Invest</h3>
              <p style={styles.cardText}>
                Opportunities approached with discipline, market awareness, and
                long-term perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="valuation" style={styles.valuationSection}>
        <div
          style={{
            ...styles.valuationInner,
            gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
            gap: isMobile ? "28px" : "38px",
          }}
        >
          <div>
            <p style={styles.sectionEyebrow}>HOME VALUATION</p>
            <h2
              style={{
                ...styles.sectionTitle,
                fontSize: isMobile ? "30px" : "40px",
              }}
            >
              What could your home be worth with the right preparation?
            </h2>
            <p style={styles.sectionText}>
              Pricing, presentation, timing, and positioning all matter. Get a
              more strategic look at your property’s potential value and what
              may help maximize it before going to market.
            </p>
            <p style={styles.sectionText}>
              Tell me a little about your home, and I’ll follow up with next
              steps.
            </p>
          </div>

          <div style={styles.formWrap}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input type="hidden" name="formType" value="home-valuation" />
              <input type="hidden" name="source" value="valuation-section" />

              <label style={styles.label}>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  style={styles.input}
                  placeholder="Your name"
                />
              </label>

              <label style={styles.label}>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  style={styles.input}
                  placeholder="you@example.com"
                />
              </label>

              <label style={styles.label}>
                Phone
                <input
                  type="tel"
                  name="phone"
                  style={styles.input}
                  placeholder="(908) 555-5555"
                />
              </label>

              <label style={styles.label}>
                Property Address
                <input
                  type="text"
                  name="propertyAddress"
                  required
                  style={styles.input}
                  placeholder="123 Main St, Town, NJ"
                />
              </label>

              <label style={styles.label}>
                Tell me about the home
                <textarea
                  name="message"
                  required
                  rows="5"
                  style={styles.textarea}
                  placeholder="Beds, baths, updates, condition, timeline, and anything else helpful..."
                />
              </label>

              <button type="submit" style={styles.submitBtn}>
                {status === "sending" ? "Sending..." : "Request Home Value Review"}
              </button>

              {status === "success" && (
                <p style={styles.successMsg}>
                  Thank you — your valuation request was sent successfully.
                </p>
              )}

              {status === "error" && (
                <p style={styles.errorMsg}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section style={styles.darkSection}>
        <div style={styles.sectionInner}>
          <p style={styles.sectionEyebrow}>FEATURED LISTINGS</p>
          <h2
            style={{
              ...styles.sectionTitle,
              fontSize: isMobile ? "30px" : "40px",
            }}
          >
            Selected homes and standout opportunities.
          </h2>

          <div
            style={{
              ...styles.listingsGrid,
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            }}
          >
            {featuredListings.map((listing) => (
              <div key={listing.title} style={styles.listingCard}>
                <img
                  src={listing.image}
                  alt={listing.title}
                  style={styles.listingImage}
                />
                <div style={styles.listingBody}>
                  <div style={styles.listingPrice}>{listing.price}</div>
                  <h3 style={styles.cardTitle}>{listing.title}</h3>
                  <p style={styles.listingTown}>{listing.town}</p>
                  <p style={styles.cardText}>{listing.details}</p>
                  <a href={listing.link} style={styles.secondaryBtn}>
                    Request Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.credSection}>
        <div style={styles.sectionInner}>
          <div
            style={{
              ...styles.credTop,
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
            }}
          >
            <div>
              <p style={styles.sectionEyebrow}>CREDIBILITY</p>
              <h2
                style={{
                  ...styles.sectionTitle,
                  fontSize: isMobile ? "30px" : "40px",
                }}
              >
                Built on trust, discipline, and execution.
              </h2>
            </div>

            <div style={styles.credBadge}>
              <div style={styles.credNumber}>$1.1B+</div>
              <div style={styles.credLabel}>Office sales volume in 2025</div>
            </div>
          </div>

          <div
            style={{
              ...styles.reviewsGrid,
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            }}
          >
            {reviewHighlights.map((review, index) => (
              <div key={index} style={styles.reviewCard}>
                <div style={styles.stars}>★★★★★</div>
                <p style={styles.reviewText}>“{review.quote}”</p>
                <div style={styles.reviewSource}>{review.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div
          style={{
            ...styles.contactInner,
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "28px" : "36px",
          }}
        >
          <div>
            <p style={styles.sectionEyebrow}>CONTACT</p>
            <h2
              style={{
                ...styles.sectionTitle,
                fontSize: isMobile ? "30px" : "40px",
              }}
            >
              Start the conversation.
            </h2>
            <p style={styles.sectionText}>
              Whether you’re buying, selling, or investing, reach out for a
              confidential consultation and a tailored strategy.
            </p>

            <div style={styles.contactInfoCard}>
              <p style={styles.contactLine}>
                <strong>Brian DeMarco</strong>
              </p>
              <p style={styles.contactLine}>(908) 812-5014</p>
              <p style={styles.contactLine}>briannjrealtor@gmail.com</p>
              <p style={styles.contactLine}>NewJerseyLuxRealty.com</p>
            </div>
          </div>

          <div style={styles.formWrap}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input type="hidden" name="formType" value="lead-form" />
              <input type="hidden" name="source" value="website-homepage" />

              <label style={styles.label}>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  style={styles.input}
                  placeholder="Your name"
                />
              </label>

              <label style={styles.label}>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  style={styles.input}
                  placeholder="you@example.com"
                />
              </label>

              <label style={styles.label}>
                Phone
                <input
                  type="tel"
                  name="phone"
                  style={styles.input}
                  placeholder="(908) 555-5555"
                />
              </label>

              <label style={styles.label}>
                How can I help?
                <textarea
                  name="message"
                  required
                  rows="5"
                  style={styles.textarea}
                  placeholder="Tell me a bit about what you're looking for..."
                />
              </label>

              <button type="submit" style={styles.submitBtn}>
                {status === "sending" ? "Sending..." : "Send Inquiry"}
              </button>

              {status === "success" && (
                <p style={styles.successMsg}>
                  Thank you — your message was sent successfully.
                </p>
              )}

              {status === "error" && (
                <p style={styles.errorMsg}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: "#050505",
    color: "#f5f1e8",
    minHeight: "100vh",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 32px",
    background: "rgba(5,5,5,0.88)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(212,175,55,0.18)",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logoMark: {
    color: "#d4af37",
    fontSize: "22px",
    lineHeight: 1,
  },

  brand: {
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "0.02em",
  },

  brandSub: {
    fontSize: "12px",
    color: "#c8b889",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginTop: "2px",
  },

  headerContact: {
    fontSize: "13px",
    color: "#d7d1c3",
    lineHeight: 1.5,
  },

  contactLink: {
    color: "#d7d1c3",
    textDecoration: "none",
    display: "block",
    transition: "0.3s",
  },

  hero: {
    position: "relative",
    minHeight: "78vh",
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  heroInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1280px",
    width: "100%",
    margin: "0 auto",
    display: "grid",
    alignItems: "center",
  },

  heroLeft: {
    maxWidth: "760px",
  },

  heroRight: {
    display: "flex",
    justifyContent: "center",
  },

  eyebrow: {
    color: "#d4af37",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    marginBottom: "18px",
  },

  heroTitle: {
    lineHeight: 1.05,
    margin: "0 0 20px 0",
    fontWeight: 800,
  },

  heroText: {
    lineHeight: 1.7,
    color: "#ddd6c6",
    maxWidth: "640px",
    marginBottom: "30px",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    display: "inline-block",
    backgroundColor: "#d4af37",
    color: "#111",
    padding: "14px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 700,
  },

  secondaryBtn: {
    display: "inline-block",
    border: "1px solid rgba(212,175,55,0.5)",
    color: "#f5f1e8",
    padding: "14px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 700,
  },

  photoCard: {
    width: "100%",
    background: "rgba(10,10,10,0.88)",
    border: "1px solid rgba(212,175,55,0.2)",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },

  photo: {
    display: "block",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    backgroundColor: "#111",
  },

  photoInfo: {
    padding: "18px 20px 22px",
  },

  photoName: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "6px",
  },

  photoRole: {
    fontSize: "14px",
    color: "#c8b889",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  section: {
    padding: "84px 32px",
    backgroundColor: "#0b0b0b",
  },

  darkSection: {
    padding: "84px 32px",
    backgroundColor: "#070707",
  },

  sectionInner: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  sectionEyebrow: {
    color: "#d4af37",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    marginBottom: "10px",
  },

  sectionTitle: {
    lineHeight: 1.15,
    margin: "0 0 24px 0",
    color: "#f5f1e8",
  },

  sectionText: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#d7d1c3",
    maxWidth: "820px",
  },

  cardGrid: {
    display: "grid",
    gap: "20px",
  },

  marketCard: {
    border: "1px solid rgba(212,175,55,0.18)",
    borderRadius: "20px",
    padding: "28px",
    background: "#101010",
  },

  serviceCard: {
    borderRadius: "20px",
    padding: "28px",
    background: "#111",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  cardTitle: {
    fontSize: "24px",
    margin: "0 0 14px 0",
    color: "#f5f1e8",
  },

  cardText: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#d7d1c3",
    margin: 0,
  },

  valuationSection: {
    padding: "84px 32px",
    background:
      "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(255,255,255,0.02))",
    borderTop: "1px solid rgba(212,175,55,0.12)",
    borderBottom: "1px solid rgba(212,175,55,0.12)",
  },

  valuationInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    alignItems: "start",
  },

  listingsGrid: {
    display: "grid",
    gap: "22px",
  },

  listingCard: {
    overflow: "hidden",
    borderRadius: "22px",
    backgroundColor: "#101010",
    border: "1px solid rgba(212,175,55,0.16)",
    boxShadow: "0 14px 40px rgba(0,0,0,0.22)",
  },

  listingImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    display: "block",
  },

  listingBody: {
    padding: "22px",
    display: "grid",
    gap: "12px",
  },

  listingPrice: {
    color: "#d4af37",
    fontSize: "26px",
    fontWeight: 800,
  },

  listingTown: {
    margin: "-6px 0 0 0",
    color: "#cfc7b6",
    fontSize: "15px",
  },

  credSection: {
    padding: "84px 32px",
    backgroundColor: "#0b0b0b",
  },

  credTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
    marginBottom: "28px",
  },

  credBadge: {
    border: "1px solid rgba(212,175,55,0.18)",
    borderRadius: "18px",
    padding: "20px 24px",
    background: "#111",
    minWidth: "240px",
  },

  credNumber: {
    color: "#d4af37",
    fontSize: "34px",
    fontWeight: 800,
    lineHeight: 1.1,
  },

  credLabel: {
    color: "#d7d1c3",
    fontSize: "14px",
    marginTop: "8px",
  },

  reviewsGrid: {
    display: "grid",
    gap: "20px",
  },

  reviewCard: {
    borderRadius: "20px",
    padding: "26px",
    backgroundColor: "#111",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  stars: {
    color: "#d4af37",
    fontSize: "18px",
    letterSpacing: "0.12em",
    marginBottom: "14px",
  },

  reviewText: {
    color: "#e2dccd",
    fontSize: "17px",
    lineHeight: 1.8,
    margin: "0 0 16px 0",
  },

  reviewSource: {
    color: "#bfae7a",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  contactSection: {
    padding: "84px 32px 100px",
    backgroundColor: "#050505",
    borderTop: "1px solid rgba(212,175,55,0.12)",
  },

  contactInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    alignItems: "start",
  },

  contactInfoCard: {
    marginTop: "22px",
    border: "1px solid rgba(212,175,55,0.18)",
    borderRadius: "20px",
    padding: "24px",
    backgroundColor: "#0d0d0d",
    maxWidth: "460px",
  },

  contactLine: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#e6dfcf",
    margin: "0 0 6px 0",
  },

  formWrap: {
    border: "1px solid rgba(212,175,55,0.18)",
    borderRadius: "22px",
    backgroundColor: "#0d0d0d",
    padding: "28px",
  },

  form: {
    display: "grid",
    gap: "18px",
  },

  label: {
    display: "grid",
    gap: "8px",
    fontSize: "14px",
    color: "#d7d1c3",
    fontWeight: 600,
  },

  input: {
    backgroundColor: "#121212",
    color: "#f5f1e8",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "14px 16px",
    fontSize: "15px",
    outline: "none",
  },

  textarea: {
    backgroundColor: "#121212",
    color: "#f5f1e8",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "14px 16px",
    fontSize: "15px",
    outline: "none",
    resize: "vertical",
    minHeight: "120px",
  },

  submitBtn: {
    backgroundColor: "#d4af37",
    color: "#111",
    border: "none",
    borderRadius: "999px",
    padding: "15px 22px",
    fontSize: "15px",
    fontWeight: 800,
    cursor: "pointer",
  },

  successMsg: {
    color: "#8ed49a",
    margin: 0,
    fontSize: "14px",
  },

  errorMsg: {
    color: "#ff8f8f",
    margin: 0,
    fontSize: "14px",
  },
};