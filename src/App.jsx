import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Resume from "./components/Resume/resume";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="pageDivider"></div>
      <About />
      <div className="pageDivider"></div>
      <Portfolio />
      <div className="pageDivider"></div>
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
