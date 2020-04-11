import React from 'react';

const Header = props => {
  return (
    <header>
      <div className="row">
        <div className="nameBox">
          <h1>VICTORIA KASZUBA</h1>
        </div>
      </div>

      <div className="row">
        <div className="navSmall">

          <a href="#about"
            onClick={() => props.handlePageChange("About")}
            className="linkFont"
            link={props.currentPage === 'About' ? "nav-link active" : 'nav-link'}>About</a>

          <a href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className="linkFont"
            link={props.currentPage === 'Portfolio' ? "nav-link active" : 'nav-link'}>Portfolio</a>

          <a href="#resume"
            onClick={() => props.handlePageChange("Resume")}
            className="linkFont"
            link={props.currentPage === 'Resume' ? "nav-link active" : 'nav-link'}>Resume</a>

        </div>
      </div>


    </header>
  )
};

export default Header;