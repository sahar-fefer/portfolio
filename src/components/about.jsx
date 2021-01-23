import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';
import Linkedin from './linkedin';

const About = ({ ABOUT }) => {
    const [skillsLi, setSkillsLi] = useState([]);
    const [header, setHeadre] = useState(false);
    const [skill, setSkill] = useState(false);
    const [introduce, setIntroduce] = useState(false);

    const headrSwap = useSpring({
        opacity: header ? 1 : 0,
        config: config.molasses,
        transform: header
            ? `translate3d(0,0,0)`
            : `translate3d(-50%,0,0)`
    })

    const skillFlip = useSpring({
        opacity: skill ? 1 : 0,
        config: config.molasses,
        transform: skill ? 'rotateY(0deg)' : 'rotateY(180deg)'
    })

    const leftIntroduce = useSpring({
        transform: introduce
            ? `translate3d(0,0,0)`
            : `translate3d(-50%,0,0)`
    });

    const rightIntroduce = useSpring({
        transform: introduce
            ? `translate3d(0,0,0)`
            : `translate3d(50%,0,0)`
    });

    const introduceSwipe = useSpring({
        opacity: skill ? 1 : 0,
        config: config.molasses
    })

    const skillsGenerator = () => {
        setSkillsLi([])
        const skills = [
            {
                name: 'javascript',
                key: 1,
                href: 'https://en.wikipedia.org/wiki/JavaScript'
            },
            {
                name: 'html',
                key: 2,
                href: 'https://en.wikipedia.org/wiki/HTML'
            },
            {
                name: 'css',
                key: 3,
                href: 'https://en.wikipedia.org/wiki/CSS'
            },
            {
                name: 'sass',
                key: 4,
                href: 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)'
            },
            {
                name: 'react',
                key: 5,
                href: 'https://en.wikipedia.org/wiki/React_(web_framework)'
            },
            {
                name: 'bootstrap',
                key: 6,
                href: 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'
            },
            {
                name: 'mySQL',
                key: 7,
                href: 'https://en.wikipedia.org/wiki/MySQL'
            },
            {
                name: 'express',
                key: 8,
                href: 'https://en.wikipedia.org/wiki/Express.js'
            },
            {
                name: 'node',
                key: 9,
                href: 'https://en.wikipedia.org/wiki/Node.js'
            },
            {
                name: 'postman',
                key: 10,
                href: 'https://www.postman.com/'
            },
            {
                name: 'python',
                key: 11,
                href: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
            },
            {
                name: 'flask',
                key: 12,
                href: 'https://en.wikipedia.org/wiki/Flask_(web_framework)'
            }
        ]

        for (const skill of skills) {
            setSkillsLi(old => [...old,
            < animated.li style={skillFlip} className={`img-wrapper perfect-center col-4 col-md-3 col-lg-2`} >
                <a href={skill.href} target="_blank">
                    <img src={`/media/skills/${skill.name}.png`} alt={skill.name} className={`skill-img`} />
                </a>
            </ animated.li >
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
                        {/* <animated.div style={headrSwap} className="under-header-line" /> */}
                    </div>
                    <div className="row">
                        <Waypoint
                            bottomOffset="20%"
                            topOffset='-20%'
                            onEnter={() => {
                                if (!introduce) setIntroduce(true);
                            }}
                        />
                        <animated.div style={introduceSwipe, leftIntroduce}
                            className="col-sm-auto linkedin-wrapper perfect-center">
                            <Linkedin LINKEDIN={LINKEDIN} />
                        </animated.div>
                        <animated.div style={introduceSwipe, rightIntroduce} className="introduc col">
                            <h1 className={'d-none d-md-block'}>{TITLE}</h1>
                            <h2 className={'d-none d-md-block'}>{ABOUT_ME_1}<span className="name">{NAME}</span>{ABOUT_ME_2}</h2>
                            <h4>{DESCRIPTION_1}</h4>
                            <h4>{DESCRIPTION_2}</h4>
                            <h4>{DESCRIPTION_3}</h4>
                            <ul className={'skills-wrapper row d-sm-none'}>
                                {skillsLi}
                            </ul>
                        </animated.div>
                    </div>
                    <div className="row">
                        <ul className={'skills-wrapper row d-none d-sm-flex'}>
                            <Waypoint
                                bottomOffset="20%"
                                topOffset='-20%'
                                onEnter={() => {
                                    if (!skill) setSkill(true);
                                }}
                            />
                            {skillsLi}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;