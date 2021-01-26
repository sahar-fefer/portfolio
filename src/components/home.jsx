import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';
import { useSpring, animated, config } from 'react-spring';

const Home = ({ HOME, language }) => {
    const { TITLE, NAME, ABOUT } = HOME;
    const mediaMatch = window.matchMedia('(min-width: 992px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

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
        <div id={'home'}
            className={'container-fluid'}
            style={{ 
                backgroundImage: matches 
                ? `url(${window.location.origin}/media/home_background.jpg)`
                : `url(${window.location.origin}/media/home_background_mobile.jpg)`
            }}>
      <animated.div style={fade} className={'header-wrapper'}>
            <div className={'header-wrapper'}>
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