// import './navbar.css'
// import Logo from '../../assets/logo-petfy-saas.svg'
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faComment,faSquarePlus,  faHeart } from '@fortawesome/free-regular-svg-icons';
// import { faBars } from '@fortawesome/free-solid-svg-icons';



// const NavBar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen); 
//     };
//     return(
//         <nav className="navbar">
//         <div className="navbar-logo">
//             <img src={Logo} alt="Logo" />
//         </div>
//         <div className={`navbar-icons ${isMenuOpen ? 'show' : ''}`}>
//              <a href="https://link-to-fourth-destination.com">
//                 <FontAwesomeIcon icon={faHeart}  size='xl' className='navbar_icon' />
//             </a>
//             <a href="https://link-to-second-destination.com">
//                 <FontAwesomeIcon icon={faComment}  size='xl' className='navbar_icon' />
//             </a>
//             <a href="https://link-to-third-destination.com">
//                 <FontAwesomeIcon icon={faSquarePlus}  size='xl' className='navbar_icon' />
//             </a>
//             <a href="https://link-to-first-destination.com">
//                 <FontAwesomeIcon icon={faUser}  size='xl' className='navbar_icon' />
//             </a>
//         </div>
//         <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} style={{ color: "#ffffff", }} size='xl' />
//     </nav>
//     )
// }

// export default NavBar;
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faSquarePlus, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import Logo from '../../assets/logo-petfy-saas.svg';
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`navbar-icons ${isMenuOpen ? 'show' : ''}`}>
        <FontAwesomeIcon icon={faHeart} size='xl' className='navbar_icon' onClick={() => navigate('/favorites')} />
        <FontAwesomeIcon icon={faComment} size='xl' className='navbar_icon' onClick={() => navigate('/chat')} />
        <FontAwesomeIcon icon={faSquarePlus} size='xl' className='navbar_icon' onClick={() => navigate('/post-picture')} />
        <FontAwesomeIcon icon={faUser} size='xl' className='navbar_icon' onClick={() => navigate('/user')} />
      </div>
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} style={{ color: "#ffffff" }} size='xl' />
    </nav>

  );
};

export default NavBar;
