import React, { useState, useEffect } from 'react';
import Linkedin from './linkedin';
const About = () => {
    const [skillsLi, setSkillsLi] = useState([]);

    const skillsGenerator = () => {
        setSkillsLi([])
        const skills = ['javascript',
            'html',
            'css', 
            'sass',
            'react',
            'bootstrap',
            'mySQL',
            'express',
            'node',
            'postman',
            'python',
            'flask']
        for (const skillName of skills) {
            setSkillsLi(old => [...old,
            < li className={`img-wrapper perfect-center col-4 col-md-3 col-lg-2`} >
                <img src={`/media/skills/${skillName}.png`} alt={skillName} className={`skill-img ${skillName}`} />
            </li >
            ])
        }
    }

    useEffect(() => {
        skillsGenerator()
    }, [])

    return (
        <div id={'about'} className={'container-fluid'}>
            <div className={'container'}>
                <h1 className="component-header">About</h1>
                <div className="row">
                    <div className="col-sm-auto linkedin-wrapper perfect-center">
                        <Linkedin />
                    </div>
                    <div className="introduc col">
                        <h1 className={'d-none d-md-block'}>So How Am I?</h1>
                        
                        <h2 className={'d-none d-md-block'}>I'm <span className="name">Sahar Feferovich</span>, Full Stack Developer</h2>
                        <h4>
                            As A Full Stack Developer, I enjoy thinking, learning, and building in creative and unique ways.
                            Programming is my playground and where I get to execute my visions.
                        </h4>
                        <h4>
                            I focus on planning,
                            designing and developing both Back-End and Front-End.
                        </h4>
                        <ul className={'skills-wrapper row d-sm-none'}>
                            {skillsLi}
                        </ul>
                    </div>
                    <ul className={'skills-wrapper row d-none d-sm-flex'}>
                        {skillsLi}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;