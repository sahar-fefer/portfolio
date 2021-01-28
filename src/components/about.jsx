import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, useTrail, animated, config } from 'react-spring';
import Linkedin from './linkedin';

const About = ({ ABOUT, language }) => {
    const [isSkill, setIsSkill] = useState(false);
    const [header, setHeadre] = useState(false);
    const [introduce, setIntroduce] = useState(false);

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

    const headrSwap = useSpring({
        opacity: header ? 1 : 0,
        config: config.molasses,
        transform: header
            ? `translate3d(0,0,0)`
            : `translate3d(-50%,0,0)`
    })

    const leftIntroduce = useSpring({
        transform: introduce
            ? `translate3d(0,0,0)`
            : `translate3d(-150%,0,0)`
    });

    const rightIntroduce = useSpring({
        transform: introduce
            ? `translate3d(0,0,0)`
            : `translate3d(150%,0,0)`
    });

    const introduceSwipe = useSpring({
        opacity: introduce ? 1 : 0,
        config: config.molasses
    })

    const skillsTrail = useTrail(skills.length, {
        opacity: isSkill ? 1 : 0,
        transform: isSkill ? 'rotateY(0deg) scale(1)' : 'rotateY(180deg) scale(0.3)'
    })

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
                    </div>
                    <div className="row">
                        <Waypoint
                            bottomOffset="20%"
                            topOffset='-20%'
                            onEnter={() => {
                                if (!introduce) setIntroduce(true);
                            }}
                        />
                        <animated.div style={introduceSwipe, language === 'en' ? leftIntroduce : rightIntroduce}
                            className="col-sm-auto linkedin-wrapper perfect-center">
                            <Linkedin LINKEDIN={LINKEDIN} />
                        </animated.div>
                        <animated.div style={introduceSwipe,  language === 'en' ? rightIntroduce : leftIntroduce} className="introduc col">
                            <h1 className={'d-none d-md-block'}>{TITLE}</h1>
                            <h2 className={'d-none d-md-block'}>{ABOUT_ME_1}<span className="name">{NAME}</span>{ABOUT_ME_2}</h2>
                            <h4>{DESCRIPTION_1}</h4>
                            <h4>{DESCRIPTION_2}</h4>
                            <h4>{DESCRIPTION_3}</h4>
                        </animated.div>
                    </div>
                    <div className="row">
                        <ul className={'skills-wrapper row'}>
                            <Waypoint
                                bottomOffset="20%"
                                topOffset='-20%'
                                onEnter={() => {
                                    if (!isSkill) setIsSkill(true);
                                }}
                            />
                            {
                                skillsTrail.map((animation, key) =>
                                    < animated.li style={animation} className={`img-wrapper perfect-center col-4 col-md-3 col-lg-2`} >
                                        <a href={skills[key].href} target="_blank">
                                            <img src={`/media/skills/${skills[key].name}.png`} alt={skills[key].name} className={`skill-img`} />
                                        </a>
                                    </ animated.li >
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;