import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import ScrollTop from './components/ScrollTop';
import Carousel from './components/Carousel';


class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <Home />
        <About />
        <Project />
        <Contact />
        <ScrollTop />
      </div>
    );
  }
}

export default App;
