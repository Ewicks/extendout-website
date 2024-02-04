import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../assets/images/menu.png';
import Logo from '../assets/images/logo.png';
import '../../src/App.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid mx-5">
        <div className="logo">
          <Link to="/">
            <img className='logo-img' src={Logo} alt="" />

          </Link>

        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            {/* Use the <img> tag for images */}
            <img className='menu-img' src={Hamburger} alt="Hamburger Icon" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink onClick={handleShowNavbar} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbar} to="/design">Design & planning</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbar} to="/build">Build</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbar} to="/gallary">Gallary</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbar} to="/team">Team</NavLink>
            </li>
            {/* <li>
              <NavLink onClick={handleShowNavbar} to="/blog">Blog</NavLink>
            </li> */}
            <li>
              <NavLink onClick={handleShowNavbar} to="/testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink onClick={handleShowNavbar} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
