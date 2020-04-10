import React, { Component } from 'react';
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import About from './pages/About.js'
import Footer from './components/Footer.js'

class App extends Component {

  render() {
    return (
      <div className="container">

        <Header />
        <Navbar />
        <About/>
        <Footer/>

      </div>
    );

    // Closing Render and App tags
  };
};

export default App;