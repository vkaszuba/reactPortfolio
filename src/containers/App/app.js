import React, { Component } from 'react';
import Header from './../../components/Header'
import Navbar from './../../components/Navbar'

class App extends Component {

  render() {
    return (
      <div className="container">

        <Header />
        <Navbar />

      </div>
    );

    // Closing Render and App tags
  };
};

export default App;