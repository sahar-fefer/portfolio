import React from 'react';
import Typical from 'react-typical';
import { useSpring, animated } from 'react-spring';

const Home = ({ HOME, language }) => {
    const { TITLE, NAME, ABOUT } = HOME;

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
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
<<<<<<< HEAD
        <div id={'home'}
            className={'container-fluid'}
            style={{
                backgroundImage: matches
                    ? `url(${window.location.origin}/media/home_background.jpg)`
                    : `url(${window.location.origin}/media/home_background_mobile.jpg)`
            }}>
=======
        <div id={'home'} className={'container-fluid'}>
>>>>>>> 283e3b1402ff13b530fad3971317a692e8cd5b0d
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
                </div>
            </animated.div>
        </div>
    );
};

export default Home;