export default function About() {
  return (
    <div style={styles.page}>
      <div style={styles.tag}>// about.jsx</div>
      <h1 style={styles.title}>This is The ABOUT Section</h1>
      <div style={styles.divider} />
    </div>
  );
};

const styles = {
  page: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "4rem 2rem",
  },
  tag: {
    color: "#555",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.8rem",
    marginBottom: "1rem",
  },
  title: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "2.6rem",
    color: "#f5f5f0",
    margin: "0 0 1.25rem",
  },
  divider: {
    height: "2px",
    background: "linear-gradient(90deg, #f0c060 0%, transparent 60%)",
    marginBottom: "2.5rem",
  },
};
