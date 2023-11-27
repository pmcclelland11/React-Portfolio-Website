import { useState } from 'react';
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Resume from "./components/Resume/resume";
import "./App.css";

function App() {
  // Use state to track the selected section
  const [selectedSection, setSelectedSection] = useState('home');

  // Function to handle section change
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <Navbar onSectionChange={handleSectionChange}  activeSection={selectedSection} />
      {selectedSection === 'home' && <Home />}
      {selectedSection === 'about' && <About />}
      {selectedSection === 'portfolio' && <Portfolio />}
      {selectedSection === 'resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
