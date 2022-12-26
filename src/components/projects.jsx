import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';

import Project from './project';

const Projects = ({ PROJECTS, language }) => {
    const { SECTION_TITLE, ALL_PROJECTS } = PROJECTS;
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
                    {
                        ALL_PROJECTS.map((project, key) => {
                            return (
                                <Project
                                    key={key}
                                    name={project.name}
                                    title={project.title}
                                    techs={project.techs}
                                    web={project.web}
                                    git={project.git}
                                    language={language} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;