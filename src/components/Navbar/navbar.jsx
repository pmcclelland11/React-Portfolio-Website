import './navbar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
                <Link className='desktopMenuListItem'>Contact</Link>
                <Link className='desktopMenuListItem'>Resume</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contact} alt='contact' className='desktopMenuImg' />Contact Me</button>
        </nav>
    )
}

export default Navbar;