import { useState, useEffect } from "react";
import Modal from "react-modal";
import emailjs from "emailjs-com";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css";

const Navbar = ({ onSectionChange, activeSection }) => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timeout;
    if (showMessage) {
      // Set a timeout to hide the message after 2000 milliseconds (2 seconds)
      timeout = setTimeout(() => {
        setShowMessage(false);
        closeModal();
      }, 2000);
    }

    // Clear the timeout on component unmount or when showMessage changes
    return () => clearTimeout(timeout);
  }, [showMessage]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Use emailjs to send the email
    emailjs.send(serviceId, templateId, formState, userId).then(
      (result) => {
        console.log(result.text);
        closeModal();
        setFormState({
          name: "",
          email: "",
          message: "",
        });
        setShowMessage(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <div
          className={`desktopMenuListItem ${
            activeSection === "home" ? "active" : ""
          }`}
          onClick={() => onSectionChange("home")}
        >
          Home
        </div>
        <div
          className={`desktopMenuListItem ${
            activeSection === "about" ? "active" : ""
          }`}
          onClick={() => onSectionChange("about")}
        >
          About
        </div>
        <div
          className={`desktopMenuListItem ${
            activeSection === "portfolio" ? "active" : ""
          }`}
          onClick={() => onSectionChange("portfolio")}
        >
          Portfolio
        </div>
        <div
          className={`desktopMenuListItem ${
            activeSection === "resume" ? "active" : ""
          }`}
          onClick={() => onSectionChange("resume")}
        >
          Resume
        </div>
      </div>
      <button className="desktopMenuBtn" onClick={openModal}>
        <img src={contact} alt="contact" className="desktopMenuImg" />
        Contact
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setShowMessage(false);
          closeModal();
        }}
        contentLabel="Contact Modal"
        overlayClassName="custom-modal-overlay"
        className="custom-modal-content"
        onAfterOpen={() => {
          document.body.classList.add("modal-open");
        }}
        onAfterClose={() => {
          document.body.classList.remove("modal-open");
        }}
      >
        <button className="closeButton" onClick={closeModal}>
          <CloseIcon />
        </button>
        <h2 className="contactTitle">Contact Form</h2>
        {/* Contact Form */}
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </Modal>

      {/* Message popup */}
      {showMessage && (
        <div className="message-popup">
          <p>Message Sent</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
