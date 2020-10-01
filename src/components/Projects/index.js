import React from 'react';

function Projects() {

    return (
        <div>
            <div>
                <img
                    src={require(`../../assets/images/logo192.png`)}
                    alt='alt'
                    key='uniqu key'
                />
                <h3>Project Titles</h3>
                <a href="/">Github Links</a>
            </div>
        </div>
    );
}

export default Projects;