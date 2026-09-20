// App.jsx
import { useEffect, useState } from "react";

const styles = {
  page: {
    margin: 0,
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0b1220 100%)",
    color: "#e2e8f0",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 32px",
    borderBottom: "1px solid rgba(148,163,184,0.15)",
  },
  logo: {
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: "-0.02em",
    color: "#38bdf8",
  },
  logoAccent: { color: "#e2e8f0" },
  links: { display: "flex", gap: 24, fontSize: 14, color: "#94a3b8" },
  hero: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "80px 24px",
  },
  badge: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#7dd3fc",
    background: "rgba(56,189,248,0.1)",
    border: "1px solid rgba(56,189,248,0.25)",
    borderRadius: 999,
    padding: "6px 14px",
    marginBottom: 24,
  },
  h1: {
    fontSize: "clamp(2rem, 6vw, 3.75rem)",
    lineHeight: 1.1,
    fontWeight: 800,
    letterSpacing: "-0.03em",
    margin: "0 0 20px",
    maxWidth: 900,
  },
  gradient: {
    background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  sub: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    color: "#94a3b8",
    maxWidth: 620,
    lineHeight: 1.6,
    margin: "0 0 40px",
  },
  actions: { display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" },
  primaryBtn: {
    background: "linear-gradient(90deg, #0ea5e9, #6366f1)",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "14px 28px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(14,165,233,0.35)",
  },
  ghostBtn: {
    background: "transparent",
    color: "#cbd5e1",
    border: "1px solid rgba(148,163,184,0.3)",
    borderRadius: 10,
    padding: "14px 28px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
  },
  stats: {
    display: "flex",
    gap: 48,
    marginTop: 64,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  stat: { textAlign: "center" },
  statValue: { fontSize: 28, fontWeight: 800, color: "#f1f5f9" },
  statLabel: { fontSize: 13, color: "#64748b", marginTop: 4 },
  footer: {
    padding: "24px 32px",
    borderTop: "1px solid rgba(148,163,184,0.15)",
    fontSize: 13,
    color: "#64748b",
    textAlign: "center",
  },
};

export default function App() {
  const [count, setCount] = useState(0);

  // Animated counter for the stats (pure visual polish)
  useEffect(() => {
    const target = 12480;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          JobSmart<span style={styles.logoAccent}>.lk</span>
        </div>
        <div style={styles.links}>
          <span>Find Work</span>
          <span>Hire Talent</span>
          <span>How it Works</span>
        </div>
      </nav>

      <main style={styles.hero}>
        <span style={styles.badge}>Trusted Digital Work Marketplace</span>

        <h1 style={styles.h1}>
          Sri Lanka's <span style={styles.gradient}>trusted marketplace</span> for digital work
        </h1>

        <p style={styles.sub}>
          Connect with verified freelancers and businesses. Secure payments, real
          reviews, and opportunities built for Sri Lanka's growing digital economy.
        </p>

        <div style={styles.actions}>
          <button style={styles.primaryBtn}>Get Started</button>
          <button style={styles.ghostBtn}>Browse Jobs</button>
        </div>

        <div style={styles.stats}>
          <div style={styles.stat}>
            <div style={styles.statValue}>{count.toLocaleString()}+</div>
            <div style={styles.statLabel}>Freelancers</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statValue}>3,200+</div>
            <div style={styles.statLabel}>Jobs Posted</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statValue}>98%</div>
            <div style={styles.statLabel}>Satisfaction</div>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} JobSmart.lk — Trusted Digital Work Marketplace
      </footer>
    </div>
  );
}
