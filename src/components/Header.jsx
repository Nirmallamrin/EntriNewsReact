import React from "react";
import logo from '../assets/images/logo.svg'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="navbar">
        <img src={logo} alt="Entri news logo" className="logo"/>
        <nav className="links">
          <ul>
            <li>
              <Link to="/" className="link">Home</Link>             
            </li>
            <li>
              <Link to="#" className="link">New</Link>               
            </li>
            <li>
              <Link to="#" className="link">Popular</Link> 
            </li>
            <li>
              <Link to="/trending" className="link">Trending</Link> 
            </li>
            <li>
              <Link to="#" className="link">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
