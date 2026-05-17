import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.badge}>Isho</div>
      <h1 style={styles.headline}>
        Hello! I'm <br />
        <span style={styles.accent}>John Patrick Capistrano</span> from
        BSIT-2C.
      </h1>
      <p style={styles.sub}>
        This is my simple navigation react app
      </p>
      <div style={styles.actions}>
        <Link to="/about" style={styles.btnPrimary}>
          Learn More →
        </Link>
        <Link to="/contact" style={styles.btnGhost}>
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: "820px",
    margin: "0 auto",
    padding: "5rem 2rem 4rem",
  },
  badge: {
    display: "inline-block",
    background: "rgba(240,192,96,0.12)",
    color: "#f0c060",
    border: "1px solid rgba(240,192,96,0.3)",
    borderRadius: "999px",
    padding: "0.3rem 1rem",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    marginBottom: "2rem",
  },
  headline: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
    fontWeight: "700",
    color: "#f5f5f0",
    lineHeight: 1.15,
    margin: "0 0 1.5rem",
  },
  accent: {
    color: "#f0c060",
    fontStyle: "italic",
  },
  sub: {
    color: "#888",
    fontSize: "1.1rem",
    lineHeight: 1.7,
    maxWidth: "520px",
    margin: "0 0 2.5rem",
    fontFamily: "Georgia, serif",
  },
  actions: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginBottom: "4rem",
  },
  btnPrimary: {
    display: "inline-block",
    background: "#f0c060",
    color: "#0d0d0d",
    padding: "0.75rem 1.8rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.85rem",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    transition: "opacity 0.2s",
  },
  btnGhost: {
    display: "inline-block",
    border: "1px solid #444",
    color: "#aaa",
    padding: "0.75rem 1.8rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.85rem",
    letterSpacing: "0.05em",
    transition: "border-color 0.2s, color 0.2s",
  },
};
