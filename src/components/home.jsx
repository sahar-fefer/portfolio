import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import useTypewriter from "react-typewriter-hook";

let index = 0;

const Home = ({ HOME, language }) => {
    const { TITLE, NAME, ABOUT, TYPING } = HOME;
    const [curTyping, setCurTyping] = useState('')
    const [curLanguage, setCurLanguage] = useState('')

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    })

    const intervalRef = useRef({});
    const typing = useTypewriter(curTyping);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = language !== curLanguage ? 0 : ++index;
                setCurLanguage(language)
                setCurTyping(TYPING[index]);
            }, TYPING[++index]);
            return () => {
                clearInterval(intervalRef.current);
            };
        },
        [curTyping, TYPING]
    );

    return (
        <div id={'home'} className={'container-fluid'}>
            <animated.div style={fade} className={'header-wrapper'}>
                <h1 className={'header'}>
                    {TITLE}<span className={'name'}>{NAME}</span>
                </h1>
                <h2 className={'about'}>
                    {ABOUT}
                </h2>
                <div className={`about-spacer`}>
                    <h2 className={`about cursor ${language}`}>{typing}</h2>
                </div>
            </animated.div>
        </div>
    );
};

export default Home;