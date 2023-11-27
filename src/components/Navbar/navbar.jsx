import { useState } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import './navbar.css';

const Navbar = ({ onSectionChange, activeSection }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <div
          className={`desktopMenuListItem ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => onSectionChange('home')}
        >
          Home
        </div>
        <div
          className={`desktopMenuListItem ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => onSectionChange('about')}
        >
          About
        </div>
        <div
          className={`desktopMenuListItem ${activeSection === 'portfolio' ? 'active' : ''}`}
          onClick={() => onSectionChange('portfolio')}
        >
          Portfolio
        </div>
        <div
          className={`desktopMenuListItem ${activeSection === 'resume' ? 'active' : ''}`}
          onClick={() => onSectionChange('resume')}
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
        onRequestClose={closeModal}
        contentLabel="Contact Modal"
      >
        <h2>Contact Me</h2>
        {/* Add your contact form here */}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </nav>
  );
};

export default Navbar;