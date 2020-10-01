import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  
  var currentPage;
  
  if (aboutSelected) {
    currentPage = <About></About>
  } else if (portfolioSelected) {
    currentPage = <Portfolio></Portfolio>
  } else if (contactSelected) {
    currentPage = <Contact></Contact>
  } else if (resumeSelected) {
    currentPage = <Resume></Resume>
  }

  return (
    <div>
      <>
        <Nav
          setAboutSelected={setAboutSelected}
          setPortfolioSelected={setPortfolioSelected}
          setContactSelected={setContactSelected}
          setResumeSelected={setResumeSelected}
        ></Nav>
        {currentPage}
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
