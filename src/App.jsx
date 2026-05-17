import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.shell}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div style={styles.notFound}>
                  <h2 style={{ color: "#f0c060", fontFamily: "Georgia, serif" }}>404</h2>
                  <p style={{ color: "#666", fontFamily: "Georgia, serif" }}>
                    Page not found. Head back <a href="/" style={{ color: "#f0c060" }}>home</a>.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  shell: {
    minHeight: "100vh",
    background: "#0a0a0a",
  },
  main: {
    minHeight: "calc(100vh - 68px)",
  },
  notFound: {
    textAlign: "center",
    paddingTop: "8rem",
  },
};
