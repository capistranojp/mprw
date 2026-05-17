import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>Isho</div>
      <ul style={styles.list}>
        {links.map(({ to, label }) => {
          const isActive = location.pathname === to;
          return (
            <li key={to} style={styles.item}>
              <Link
                to={to}
                style={{
                  ...styles.link,
                  ...(isActive ? styles.activeLink : {}),
                }}
              >
                {label}
                {isActive && <span style={styles.dot} />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2.5rem",
    height: "68px",
    background: "#0d0d0d",
    borderBottom: "1px solid #222",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  brand: {
    color: "#f0c060",
    fontFamily: "'Courier New', monospace",
    fontSize: "1.1rem",
    fontWeight: "bold",
    letterSpacing: "0.05em",
  },
  list: {
    display: "flex",
    gap: "0.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  item: {
    position: "relative",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    padding: "0.5rem 1.1rem",
    color: "#999",
    textDecoration: "none",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    borderRadius: "6px",
    transition: "color 0.2s, background 0.2s",
  },
  activeLink: {
    color: "#f0c060",
    background: "rgba(240,192,96,0.08)",
  },
  dot: {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "#f0c060",
    display: "block",
  },
};
