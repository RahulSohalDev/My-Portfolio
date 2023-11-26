import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import jsx file
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

// import css
import "./styles/navbar.css"
import "./styles/contact.css"
import "./styles/footer.css"
import "./styles/hero.css"
import "./styles/projects.css"
import "./styles/about.css"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero/>
        <Routes>
          {/* <Route path="/" element={<Hero/>}/> */}
          
          {/* <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
        <About/>
        <Projects/>
        <Contact/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
