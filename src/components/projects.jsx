import React from 'react';
import Project from './project';

const Projects = ({ PROJECTS, language }) => {
    const { SECTION_TITLE, CONNECT4, SAHAR_ESTATE, SALT_FEFER, READ_MY_LIPS, PEPE } = PROJECTS;
    return (
        <div id={'projects'}>
            <div className="container-fluid">
                <h1 className="component-header">{SECTION_TITLE}</h1>
                <div className="projects-wrapper container">
                    <Project
                        name={'connect4'}
                        title={CONNECT4}
                        techs={['React.JS']}
                        web={''}
                        git={'https://github.com/saharovich/connect-4'}
                        language={language} />
                    <Project
                        name={'saharEstate'}
                        title={SAHAR_ESTATE}
                        description={''}
                        techs={['React.JS', 'Node.JS']}
                        web={''}
                        git={'https://github.com/saharovich/sahar-estate-web'}
                        language={language} />
                    <Project
                        name={'salt&fefer'}
                        title={SALT_FEFER}
                        description={''}
                        techs={['WordPress']}
                        web={'http://www.feferovich.co.il/'}
                        git={''}
                        language={language} />
                    <Project
                        name={'readMyLips'}
                        title={READ_MY_LIPS}
                        description={''}
                        techs={['WIX']}
                        web={'https://www.readmylips-mask.com/'}
                        git={''}
                        language={language} />
                    <Project
                        name={'pepe'}
                        title={PEPE}
                        description={''}
                        techs={['WIX']}
                        web={'https://www.pepeimpresario.com/'}
                        git={''}
                        language={language} />
                </div>
            </div>
        </div>
    );
};

export default Projects;