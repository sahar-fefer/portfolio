import React, { useState, useEffect } from 'react';
import Linkedin from './linkedin';
const About = ({ ABOUT }) => {
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

    const { SECTION_TITLE, LINKEDIN, TITLE, ABOUT_ME_1, NAME, ABOUT_ME_2, DESCRIPTION_1, DESCRIPTION_2, DESCRIPTION_3 } = ABOUT;
    return (
        <div id={'about'} className={'container-fluid'}>
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
    );
};

export default About;