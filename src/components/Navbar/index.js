import React from 'react';

// Replace this.state with props
const Navbar = props => {
  return (

    <div className="col-xs-0 col-md-2">
    <div className="navBar">
        <a href="index.html" className="linkFont"><h6>//</h6> About</a>
        <a href="portfolio.html" className="linkFont">// Portfolio</a>
        <a href="resume.html" className="linkFont">// Resume</a>
        <a href="contact.html" className="linkFont">// Contact</a>
    </div>
    </div>
  )
};

export default Navbar;