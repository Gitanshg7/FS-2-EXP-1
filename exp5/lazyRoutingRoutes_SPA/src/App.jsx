import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Lazy loading with artificial delay
const Home = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./components/home.jsx")), 1000)
  )
);

const About = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./components/about.jsx")), 1200)
  )
);

const Contact = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./components/contact.jsx")), 1500)
  )
);

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">Lazy Loading SPA</h1>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="content">
          <Suspense fallback={<div className="loader">Loading Page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
