
import React, { useState } from 'react'
import { headerlink } from '../../DataFolder/ListData'
import { Link } from 'react-scroll'

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNav = () => {
    setIsVisible(prevState => !prevState);
  };
  return (
    <header className="header_main">
      <nav className="d-flex flex-wrap align-items-center">
        <Link to="home" className="logo text-center" activeClass="active" spy={true} smooth={true} offset={-70} duration={100}>
          <img src="./logo-black.svg" alt="logo" />
        </Link>
        <button className="togglebtn" onClick={toggleNav}><i className="fa-solid fa-bars"></i></button>
        <div className={`navright ${isVisible ? 'visible' : ''} flex-wrap justify-content-around align-items-center`} id="toggle_nav">
          <div className="navmenu graybg">
            <ul className="d-flex justify-content-around">
              {
              headerlink.map((items) => (
                <li><Link to={items.link} activeClass="active" spy={true} smooth={true} offset={-70} duration={100}>{items.title}</Link></li>
                ))
              
                }
            </ul>
          </div>
          <div className="navbtn ">
            <div className="center-box">
              <div className="animated-border-box-glow"></div>
              <a href="/" className="animated-border-box">
                <span>Get a Demo</span>
                <i className="fa-solid fa-chevron-right pl-2"></i>
              </a>
            </div>
          </div>
        </div>
        
      </nav>
    </header>
  )
}

export default Header
