import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logoWrap}>
          <div style={styles.logoMark}>▲</div>
          <div>
            <div style={styles.brand}>New Jersey Lux Realty</div>
            <div style={styles.brandSub}>
              Luxury Homes • Real Estate • Investments
            </div>
          </div>
        </div>
        <div style={styles.headerContact}>
          <div>Brian DeMarco</div>
          <div>(908) 812-5014</div>
          <div>briannjrealtor@gmail.com</div>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>NEW JERSEY LUXURY REAL ESTATE</p>
          <h1 style={styles.heroTitle}>
            Elevated representation for buyers, sellers, and investors.
          </h1>
          <p style={styles.heroText}>
            New Jersey Lux Realty is built around precision, presentation, and
            local market expertise. From standout homes to strategic
            opportunities, every move is handled with intention.
          </p>

          <div style={styles.heroButtons}>
            <a href="#contact" style={styles.primaryBtn}>
              Schedule a Consultation
            </a>
            <a href="#markets" style={styles.secondaryBtn}>
              Explore Markets
            </a>
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>Luxury</div>
            <div style={styles.statLabel}>Brand Positioning</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>Strategic</div>
            <div style={styles.statLabel}>Buyer & Seller Guidance</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>Focused</div>
            <div style={styles.statLabel}>New Jersey Market Expertise</div>
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeadingWrap}>
            <p style={styles.sectionEyebrow}>ABOUT</p>
            <h2 style={styles.sectionTitle}>A refined, disciplined approach to real estate.</h2>
          </div>
          <p style={styles.sectionText}>
            Brian DeMarco brings a polished, high-trust approach to New Jersey
            real estate. Built on service, preparation, and strong execution,
            the brand is designed to help clients move confidently whether
            they’re purchasing, selling, or investing.
          </p>
        </div>
      </section>

      <section id="markets" style={styles.darkSection}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeadingWrap}>
            <p style={styles.sectionEyebrow}>FEATURED MARKETS</p>
            <h2 style={styles.sectionTitle}>Distinctive communities. Tailored strategy.</h2>
          </div>

          <div style={styles.cardGrid}>
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
          <div style={styles.sectionHeadingWrap}>
            <p style={styles.sectionEyebrow}>SERVICES</p>
            <h2 style={styles.sectionTitle}>Representation designed around results.</h2>
          </div>

          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>Buy</h3>
              <p style={styles.cardText}>
                Clear guidance, strong positioning, and a focused search strategy
                tailored to your goals.
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

      <section style={styles.ctaSection}>
        <div style={styles.ctaInner}>
          <p style={styles.sectionEyebrow}>NEXT MOVE</p>
          <h2 style={styles.ctaTitle}>Ready to make your next real estate move with confidence?</h2>
          <p style={styles.ctaText}>
            Whether you’re exploring the market, preparing to sell, or looking
            for the right opportunity, New Jersey Lux Realty is built to help
            you move with clarity.
          </p>
          <a href="#contact" style={styles.primaryBtn}>
            Start the Conversation
          </a>
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeadingWrap}>
            <p style={styles.sectionEyebrow}>CONTACT</p>
            <h2 style={styles.sectionTitle}>Let’s connect.</h2>
          </div>

          <div style={styles.contactCard}>
            <p style={styles.contactLine}>
              <strong>Brian DeMarco</strong>
            </p>
            <p style={styles.contactLine}>(908) 812-5014</p>
            <p style={styles.contactLine}>briannjrealtor@gmail.com</p>
            <p style={styles.contactLine}>NewJerseyLuxRealty.com</p>
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
    zIndex: 10,
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
    textAlign: "right",
    fontSize: "13px",
    color: "#d7d1c3",
    lineHeight: 1.5,
  },

  hero: {
    position: "relative",
    minHeight: "78vh",
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgba(10,10,10,0.96), rgba(18,18,18,0.88)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)",
  },

  heroContent: {
    position: "relative",
    zIndex: 1,
    maxWidth: "760px",
    padding: "80px 32px",
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
    fontSize: "58px",
    lineHeight: 1.05,
    margin: "0 0 20px 0",
    fontWeight: 800,
    maxWidth: "900px",
  },

  heroText: {
    fontSize: "18px",
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

  statsSection: {
    padding: "28px 32px 18px",
    backgroundColor: "#0a0a0a",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  statCard: {
    border: "1px solid rgba(212,175,55,0.18)",
    borderRadius: "18px",
    padding: "24px",
    background: "linear-gradient(180deg, #111, #0a0a0a)",
  },

  statNumber: {
    fontSize: "28px",
    fontWeight: 800,
    color: "#d4af37",
    marginBottom: "8px",
  },

  statLabel: {
    color: "#d8d1c2",
    fontSize: "15px",
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

  sectionHeadingWrap: {
    marginBottom: "28px",
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
    fontSize: "38px",
    lineHeight: 1.15,
    margin: 0,
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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },

  marketCard: {
    border: "1px solid rgba(212,175,55,0.18)",
    borderRadius: "20px",
    padding: "28px",
    background: "#101010",
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
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

  ctaSection: {
    padding: "90px 32px",
    background:
      "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,255,255,0.02))",
    borderTop: "1px solid rgba(212,175,55,0.12)",
    borderBottom: "1px solid rgba(212,175,55,0.12)",
  },

  ctaInner: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },

  ctaTitle: {
    fontSize: "42px",
    margin: "0 0 18px 0",
    lineHeight: 1.2,
  },

  ctaText: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#d7d1c3",
    maxWidth: "760px",
    margin: "0 auto 28px",
  },

  contactSection: {
    padding: "80px 32px 100px",
    backgroundColor: "#050505",
  },

  contactCard: {
    marginTop: "20px",
    border: "1px solid rgba(212,175,55,0.18)",
    borderRadius: "20px",
    padding: "28px",
    maxWidth: "520px",
    backgroundColor: "#0d0d0d",
  },

  contactLine: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#e6dfcf",
    margin: "0 0 6px 0",
  },
};
