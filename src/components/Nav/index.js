import React from 'react';

function Nav(props) {
    const {
        aboutSelected,
        portfolioSelected,
        contactSelected,
        resumeSelected,
        setAboutSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected,
    } = props;

    return (
        <header>
            <h2>
                Vincent Caruso
            </h2>
            <nav>
                <ul>
                <li className={`${aboutSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(true);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>About</span>
                    </li>
                    <li className={`${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setPortfolioSelected(true);
                            setContactSelected(false);
                            setResumeSelected(false);
                        }}>Portfolio</span>
                    </li>
                    <li className={`${contactSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setContactSelected(true);
                            setResumeSelected(false);
                        }}>Contact Me</span>
                    </li>
                    <li className={`${resumeSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                            setResumeSelected(true);
                        }}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;