import React from 'react';
import Typical from 'react-typical';
import { useSpring, animated, config } from 'react-spring';

const Home = ({ HOME, language }) => {
    const { TITLE, NAME, ABOUT } = HOME;

    const fade = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
    })

    const enTyping = [
        "text text",
        5000,
        "text blabla",
        5000
    ]
    const heTyping = [
        "טקסט טקסט",
        5000,
        "טקסט בלהבלה",
        5000
    ]

    return (
        <div id={'home'} className={'container-fluid'}>
            <animated.div style={fade} className={'header-wrapper'}>
                <h1 className={'header'}>
                    {TITLE}<span className={'name'}>{NAME}</span>
                </h1>
                <h2 className={'about'}>
                    {ABOUT}
                </h2>
                {
                    language === 'en' &&
                    <Typical
                        loop={Infinity}
                        className={'typing'}
                        steps={enTyping}
                        wrapper="h2"
                    />
                }
                {
                    language === 'he' &&
                    <Typical
                        loop={Infinity}
                        className={'typing'}
                        steps={heTyping}
                        wrapper="h2"
                    />
                }
            </animated.div>
        </div>
    );
};

export default Home;