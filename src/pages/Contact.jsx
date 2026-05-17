export default function Contact() {
  return (
    <div style={styles.page}>
      <div style={styles.tag}>// contact.jsx</div>
      <h1 style={styles.title}>Get in Touch</h1>
      <h1 style={styles.title}>@capistranojp</h1>
      <p style={styles.sub}>Have a question or want to work together? Send a message.</p>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: "680px",
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
    margin: "0 0 0.75rem",
  },
  sub: {
    color: "#777",
    fontFamily: "Georgia, serif",
    fontSize: "1rem",
    margin: "0 0 2.5rem",
    lineHeight: 1.6,
  },
};