import React, { Component } from 'react';
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import About from './pages/About.js'
import Portfolio from './pages/Portfolio.js'
import Resume from './pages/Resume.js'
import Footer from './components/Footer.js'

class App extends Component {
  state = {
    currentPage: "About"
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  // Create a function for rendering the right page based
  // on the current state of the page
  renderPage = () => {
    switch (this.state.currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
        case 'Resume':
          return <Resume />;
      default:
        return <About />;
    }
  }
  render() {
    return (
      <div className="container">
        <Header
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <div className="row">
        <Navbar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;