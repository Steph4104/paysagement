import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import WeDo from './pages/WeDo';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Footer from './pages/Footer';
import ScrollTop from './components/ScrollTop';
import Carousel from './components/Carousel';


class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <Home />
        <About />
        <WeDo />
        <Project />
        <Contact />
        <Footer />
        <ScrollTop />
      </div>
    );
  }
}

export default App;
