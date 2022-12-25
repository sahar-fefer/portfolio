import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, useTrail, animated, config } from 'react-spring';
import Linkedin from './linkedin';

const About = ({ ABOUT, language }) => {
    const [isSkill, setIsSkill] = useState(false);
    const [header, setHeadre] = useState(false);
    const [introduce, setIntroduce] = useState(false);

    const skills = [
        'javascript',
        'typescript',
        'html',
        'css',
        'sass',
        'react',
        'gatsby',
        'bootstrap',
        'mySQL',
        'express',
        'node',
        'postman'
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
            : `translate3d(-150%,0,0)`,
        config: config.slow
    });

    const rightIntroduce = useSpring({
        transform: introduce
            ? `translate3d(0,0,0)`
            : `translate3d(150%,0,0)`,
        config: config.slow
    });

    const introduceSwipe = useSpring({
        opacity: introduce ? 1 : 0
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
                        <animated.div style={(introduceSwipe, language === 'en' ? leftIntroduce : rightIntroduce)}
                            className="col-sm-auto linkedin-wrapper perfect-center">
                            <Linkedin LINKEDIN={LINKEDIN} />
                        </animated.div>
                        <animated.div style={(introduceSwipe, language === 'en' ? rightIntroduce : leftIntroduce)} className="introduc col">
                            <h1 className={'d-none d-md-block'}>{TITLE}</h1>
                            <h2 className={'d-none d-md-block'}>{ABOUT_ME_1}<span className="name">{NAME}</span>{ABOUT_ME_2}</h2>
                            <h4>{DESCRIPTION_1}</h4>
                            <h4>{DESCRIPTION_2}</h4>
                            <h4>{DESCRIPTION_3}</h4>
                        </animated.div>
                    </div>
                    <Waypoint
                        bottomOffset="10%"
                        topOffset='-10%'
                        onEnter={() => {
                            if (!isSkill) setIsSkill(true);
                        }}
                    />
                    <ul className={'skills-wrapper'}>
                        {
                            skillsTrail.map((animation, i) =>
                                < animated.li style={animation} className={`img-wrapper perfect-center`} key={i}>
                                    <img src={`/media/skills/${skills[i]}.jpg`} alt={skills[i]} className={`skill-img`} />
                                </ animated.li >
                            )
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default About;