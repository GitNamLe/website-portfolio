import React, { Component } from 'react';
import Header from './components/header/header'; 
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
