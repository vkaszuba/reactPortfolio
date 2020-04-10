import React from 'react';

const Header = props => {
  return (
    <header>
      <div className="col">
        <div className="nameBox">
          <h1>VICTORIA KASZUBA</h1>
        </div>
      </div>

      <div className="col">
          <div className="dropdown">
            <button className="btn shadow-none" type="button" data-toggle="dropdown">
              <div className="menuFont">X</div>
            </button>
            <div className="dropdown-menu">
              <a href="index.html" className="linkFont">
                <h6>//</h6> About
              </a>
              
              <a href="portfolio.html" className="linkFont">// Portfolio</a>
              <a href="resume.html" className="linkFont">// Resume</a>
              <a href="contact.html" className="linkFont">// Contact</a>
            </div>
          </div>
        </div>
    </header>
  )
};

export default Header;