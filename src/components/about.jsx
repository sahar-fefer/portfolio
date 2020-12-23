import React, { useState, useEffect } from 'react';
import Linkedin from './linkedin';
const About = () => {
    const [skillsLi, setSkillsLi] = useState([]);

    const skillsGenerator = () => {
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
            console.log('skillName', skillName);
            setSkillsLi(old => [...old,
            < li className={'col-4 col-md-2 img-wrapper'} >
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
                <h1 className="header">About</h1>
                <div className="row">
                    {/* <div className="col-md-auto img-wrapper">
                        <div className="my-img" />
                    </div> */}
                    <div className="row">
                    <div className="col-auto">
                            <Linkedin />
                        </div>
                        <div className="col">
                            <ul className={'row skills-wrapper'}>
                                {skillsLi}
                            </ul>
                        </div>
                    </div>

                    {/* <div className="col-md-auto linkedin-wrapper">
                        <Linkedin />
                    </div> */}
                    <div className="introduc col">
                        <h1>
                            So How I Am?
                        </h1>
                        <h2>
                            I'm Sahar Feferovich Web Developer
                        </h2>
                        <h4>
                            Full Stack developer,
                            capable of developing web platforms from scratch to production,
                            with full responsiveness and preformance.
                        </h4>
                        <h4>
                            I focus on planning,
                            designing and developing both Back-End and Front-End.
                        </h4>
                        {/* <ul className={'row skills-wrapper'}>
                            {skillsLi}
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;