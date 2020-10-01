import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}

export default App;
