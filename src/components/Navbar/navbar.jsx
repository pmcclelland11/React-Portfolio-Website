import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import "./navbar.css";

const Navbar = ({ onSectionChange }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <div
          className="desktopMenuListItem"
          onClick={() => onSectionChange("home")}
        >
          Home
        </div>
        <div
          className="desktopMenuListItem"
          onClick={() => onSectionChange("about")}
        >
          About
        </div>
        <div
          className="desktopMenuListItem"
          onClick={() => onSectionChange("portfolio")}
        >
          Portfolio
        </div>
        <div
          className="desktopMenuListItem"
          onClick={() => onSectionChange("resume")}
        >
          Resume
        </div>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="contact" className="desktopMenuImg" />
        Contact
      </button>
    </nav>
  );
};

export default Navbar;