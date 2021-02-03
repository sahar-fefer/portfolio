import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';

import Project from './project';

const Projects = ({ PROJECTS, language }) => {
    const { SECTION_TITLE, CONNECT4, SAHAR_ESTATE, SALT_FEFER, READ_MY_LIPS, PEPE } = PROJECTS;
    const [header, setHeadre] = useState(false);

    const headrSwap = useSpring({
        opacity: header ? 1 : 0,
        config: config.molasses,
        transform: header
            ? `translate3d(0,0,0)`
            : `translate3d(50%,0,0)`
    })

    return (
        <div id={'projects'}>
            <div className="container-fluid">
                <div>
                    <Waypoint
                        bottomOffset="20%"
                        topOffset='-20%'
                        onEnter={() => {
                            if (!header) setHeadre(true);
                        }}
                    />
                    <animated.h1 style={headrSwap}
                        className="component-header">
                        {SECTION_TITLE}
                    </animated.h1>
                </div>
                <div className="projects-wrapper container">
                    <Project
                        name={'connect4'}
                        title={CONNECT4.name}
                        description={CONNECT4.description}
                        techs={['React.JS']}
                        web={''}
                        git={'https://github.com/saharovich/connect-4'}
                        language={language} />
                    <Project
                        name={'saharEstate'}
                        title={SAHAR_ESTATE.name}
                        description={SAHAR_ESTATE.description}
                        techs={['React.JS', 'Node.JS']}
                        web={''}
                        git={'https://github.com/saharovich/sahar-estate-web'}
                        language={language} />
                    <Project
                        name={'saltNfefer'}
                        title={SALT_FEFER.name}
                        description={SALT_FEFER.description}
                        techs={['WordPress']}
                        web={'http://www.feferovich.co.il/'}
                        git={''}
                        language={language} />
                    <Project
                        name={'readMyLips'}
                        title={READ_MY_LIPS.name}
                        description={READ_MY_LIPS.description}
                        techs={['WIX']}
                        web={'https://www.readmylips-mask.com/'}
                        git={''}
                        language={language} />
                    <Project
                        name={'pepe'}
                        title={PEPE.name}
                        description={PEPE.description}
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