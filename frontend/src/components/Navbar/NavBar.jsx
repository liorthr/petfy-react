import './navbar.css'
import Logo from '../../assets/logo-petfy-saas.svg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment,faSquarePlus,  faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };
    return(
        <nav className="navbar">
        <div className="navbar-logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className={`navbar-icons ${isMenuOpen ? 'show' : ''}`}>
            {/* Conditionally render this div based on isMenuOpen */}
            <a href="https://link-to-first-destination.com">
                <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} size='xl' className='navbar_icon' />
            </a>
            <a href="https://link-to-second-destination.com">
                <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff", }} size='xl' className='navbar_icon' />
            </a>
            <a href="https://link-to-third-destination.com">
                <FontAwesomeIcon icon={faSquarePlus} style={{ color: "#ffffff", }} size='xl' className='navbar_icon' />
            </a>
            <a href="https://link-to-fourth-destination.com">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", }} size='xl' className='navbar_icon' />
            </a>
        </div>
        <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} style={{ color: "#ffffff", }} size='xl' />
    </nav>
    )
}

export default NavBar;