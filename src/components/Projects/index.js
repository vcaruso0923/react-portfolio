import React from 'react';

function Projects() {

    const photos = [
        {
            name: 'COVID-19 Data Hub',
            repo: 'https://github.com/tedpedersen/group-project-uc-berkeley',
            link: 'https://cvdatahub.com/',
            imagePath: '../../assets/images/covid-data.PNG',
        },
        {
            name: 'CA Critter Tracker',
            repo: 'https://github.com/vcaruso0923/california-critter-tracker',
            link: 'https://pure-scrubland-55089.herokuapp.com/',
            imagePath: '../../assets/images/critter-tracker.PNG',        
        },
        {
            name: 'Oh Snap!',
            repo: 'https://github.com/vcaruso0923/photo-port',
            link: 'https://vcaruso0923.github.io/photo-port/',
            imagePath: '../../assets/images/oh-snap.PNG',        
        },
        {
            name: 'Food Festival',
            repo: 'https://github.com/vcaruso0923/food-festival',
            link: 'https://vcaruso0923.github.io/food-festival/',
            imagePath: '../../assets/images/food-festival.PNG',
        },
        {
            name: 'Pizza Hunt',
            repo: 'https://github.com/vcaruso0923/pizza-hunt',
            link: 'https://radiant-forest-06641.herokuapp.com/',
            imagePath: '../../assets/images/pizza-hunt.PNG',
        },
        {
            name: 'Weather Dashboard',
            repo: 'https://github.com/vcaruso0923/weather-dashboard',
            link: 'https://vcaruso0923.github.io/weather-dashboard/',
            imagePath: '../../assets/images/weather-dashboard.PNG',
        }
    ]

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