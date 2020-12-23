import React, { useState, useEffect } from 'react';

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
            < li className={'col-2 img-wrapper'} >
                <img src={`/skills/${skillName}.png`} alt={skillName} className={`skill-img ${skillName}`} />
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
                <div className="row">
                    <div className="col-auto img-wrapper">
                        <div className="my-img" />
                    </div>
                    <div className="introduc col">
                        <h1>
                            So How I Am?
                        </h1>
                        <h2>
                            I'm Sahar Feferovich Web Developer
                        </h2>
                        <h4>
                            Full Stack developer, capable of developing web platforms from scratch to production, with full responsiveness and preformance.
                        </h4>
                        <h4>
                            I focus on planning, designing and developing both Back-End and Front-End.
                        </h4>
                        <h4>
                            Hands-on a wide range of technologies and platforms: JaveScript, CSS, HTML, React, MySQL and Node.js.
                        </h4>
                        {/* <h2 className={'mt-4 mb-4'}>
                            skills
                        </h2> */}
                        <ul className={'row skills-wrapper'}>
                            {skillsLi}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;