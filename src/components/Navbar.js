import React from 'react';

// Replace this.state with props
const Navbar = props => {
  return (

    <div className="col-xs-0 col-md-2">
      <div className="navBar">
        <div className="row">
          <a href="#about"
            onClick={() => props.handlePageChange("About")}
            className="linkFont"
            link={props.currentPage === 'About' ? "nav-link active" : 'nav-link'}>About</a>
        </div>
        <div className="row">
          <a href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className="linkFont"
            link={props.currentPage === 'Portfolio' ? "nav-link active" : 'nav-link'}>Portfolio</a>
        </div>
        <div className="row">
          <a href="#resume"
            onClick={() => props.handlePageChange("Resume")}
            className="linkFont"
            link={props.currentPage === 'Resume' ? "nav-link active" : 'nav-link'}>Resume</a>
        </div>
      </div>
    </div>
  )
};

export default Navbar;