import React, { useState, useEffect } from 'react';
import Linkedin from './linkedin';
const About = ({ ABOUT }) => {
    const [skillsLi, setSkillsLi] = useState([]);

    const skillsGenerator = () => {
        setSkillsLi([])
        const skills = [
            {
                name: 'javascript',
                href: 'https://en.wikipedia.org/wiki/JavaScript'
            },
            {
                name: 'html',
                href: 'https://en.wikipedia.org/wiki/HTML'
            },
            {
                name: 'css',
                href: 'https://en.wikipedia.org/wiki/CSS'
            },
            {
                name: 'sass',
                href: 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)'
            },
            {
                name: 'react',
                href: 'https://en.wikipedia.org/wiki/React_(web_framework)'
            },
            {
                name: 'bootstrap',
                href: 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'
            },
            {
                name: 'mySQL',
                href: 'https://en.wikipedia.org/wiki/MySQL'
            },
            {
                name: 'express',
                href: 'https://en.wikipedia.org/wiki/Express.js'
            },
            {
                name: 'node',
                href: 'https://en.wikipedia.org/wiki/Node.js'
            },
            {
                name: 'postman',
                href: 'https://www.postman.com/'
            },
            {
                name: 'python',
                href: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
            },
            {
                name: 'flask',
                href: 'https://en.wikipedia.org/wiki/Flask_(web_framework)'
            }
        ]
        for (const skill of skills) {
            setSkillsLi(old => [...old,
            < li className={`img-wrapper perfect-center col-4 col-md-3 col-lg-2`} >
                <a href={skill.href} target="_blank">
                    <img src={`/media/skills/${skill.name}.png`} alt={skill.name} className={`skill-img`} />
                </a>
            </li >
            ])
        }
    }

    useEffect(() => {
        skillsGenerator()
    }, [])

    const { SECTION_TITLE, LINKEDIN, TITLE, ABOUT_ME_1, NAME, ABOUT_ME_2, DESCRIPTION_1, DESCRIPTION_2, DESCRIPTION_3 } = ABOUT;
    return (
        <div id={'about'}>
            <div className="container-fluid">
                <div className={'container'}>
                    <h1 className="component-header">{SECTION_TITLE}</h1>
                    <div className="row">
                        <div className="col-sm-auto linkedin-wrapper perfect-center">
                            <Linkedin LINKEDIN={LINKEDIN} />
                        </div>
                        <div className="introduc col">
                            <h1 className={'d-none d-md-block'}>{TITLE}</h1>
                            <h2 className={'d-none d-md-block'}>{ABOUT_ME_1}<span className="name">{NAME}</span>{ABOUT_ME_2}</h2>
                            <h4>{DESCRIPTION_1}</h4>
                            <h4>{DESCRIPTION_2}</h4>
                            <h4>{DESCRIPTION_3}</h4>
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
        </div>
    );
};

export default About;