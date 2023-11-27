import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";

const Navbar = () => {
    return (
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='desktopMenu'>
          <Link
            to='home'
            className='desktopMenuListItem'
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            to='about'
            className='desktopMenuListItem'
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            to='portfolio'
            className='desktopMenuListItem'
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            to='resume'
            className='desktopMenuListItem'
            smooth={true}
            duration={500}
          >
            Resume
          </Link>
          <Link
            to='contact'
            className='desktopMenuListItem'
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <button className='desktopMenuBtn'>
          <img src={contact} alt='contact' className='desktopMenuImg' />
          Contact Me
        </button>
      </nav>
    );
  };
  
  export default Navbar;
