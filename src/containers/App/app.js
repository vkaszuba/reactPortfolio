import React, { Component } from 'react';
import Header from './../../components/Header'
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'

class App extends Component {

  render() {
    return (
      <div className="container">

        <Header />
        <Navbar />
        <Footer/>

      </div>
    );

    // Closing Render and App tags
  };
};

export default App;