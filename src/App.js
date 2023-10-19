import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
// Import components for the app pages, navbar and footer components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import ProjectsAll from "./components/ProjectsAll";
import Resume from "./components/Resume";
// Import css file for the app styles
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMeWithProject />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/project-all" element={<ProjectsAll />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
// Export the app component
const AboutMeWithProject = () => {
  return (
    <div>
      <AboutMe />
    </div>
  );
};
export default App;
