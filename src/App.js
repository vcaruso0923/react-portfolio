import React, { useState, useEffect } from 'react';
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
  var pageName;

  if (aboutSelected) {
    currentPage = <About></About>
    pageName = "Vincent Caruso"
  } else if (portfolioSelected) {
    currentPage = <Portfolio></Portfolio>
    pageName = "Portfolio"
  } else if (contactSelected) {
    currentPage = <Contact></Contact>
    pageName = "Contact"
  } else if (resumeSelected) {
    currentPage = <Resume></Resume>
    pageName = "Resume"
  }

  useEffect(() => { document.title = pageName; })

  return (
    <div>
      <>
        <Nav
          aboutSelected={aboutSelected}
          portfolioSelected={portfolioSelected}
          contactSelected={contactSelected}
          resumeSelected={resumeSelected}
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
