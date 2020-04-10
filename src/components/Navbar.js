import React from 'react';

// Replace this.state with props
const Navbar = props => {
  return (

    <div className="col-xs-0 col-md-2">
    <div className="navBar">
    <a href="#about" 
           onClick={() => props.handlePageChange("About")} 
           className="linkFont"
           link={ props.currentPage === 'About' ? "nav-link active" : 'nav-link'}>About</a>

        <a href="#portfolio" 
           onClick={() => props.handlePageChange("Portfolio")} 
           className="linkFont"
           link={ props.currentPage === 'Portfolio' ? "nav-link active" : 'nav-link'}>Portfolio</a>

    </div>
    </div>
  )
};

export default Navbar;