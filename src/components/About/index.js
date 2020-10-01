import React from 'react';

function About() {

    return (
        <div>
            <h2>About Me</h2>
            <img
                src={require(`../../assets/images/pro.jpg`)}
                alt='Vincent Caruso on the beach'
                key='pro-pic'
            />
            <p>
            I'm a full-stack web developer. Have a look at some projects I've worked on. Feel free to reach out!
            </p>
        </div>
    );
}

export default About;