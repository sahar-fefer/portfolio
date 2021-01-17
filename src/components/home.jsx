import React from 'react';
import Typical from 'react-typical';

const Home = ({ HOME, language }) => {
    const { TITLE, NAME, ABOUT, TYPING } = HOME;

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
        </div>
    );
};

export default Home;