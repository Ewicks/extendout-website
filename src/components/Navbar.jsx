import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NewLogo from '../assets/images/newlogo.png';
import '../../src/App.css';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
<IoMenu />
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid mx-5 navbar-m">
        <div className="logo">
          <Link to="/">
            <img className='logo-img' src={NewLogo} alt="" />

          </Link>

        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <IoClose /> : <IoMenu />}
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
              <NavLink onClick={handleShowNavbar} to="/gallary">Gallery</NavLink>
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
