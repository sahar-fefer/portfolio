import React from 'react';
import Typical from 'react-typical';

const Home = () => {
    return (
        // <div id={'home'} className={'container-fluid'} style={homeStyle}>
        <div id={'home'} className={'container-fluid'}>
            <div className={'header-wrapper'}>
                <h1 className={'header'}>
                    Hey! I'm <span className={'name'}>Sahar Feferovich</span>
                </h1>
                <h2 className={'header'}>
                    I'm A Fullstack Developer
                </h2>
                <Typical
                    loop={Infinity}
                    steps={[
                        `text text`,
                        5000,
                        `text blabla`,
                        5000
                    ]}
                    wrapper="h2"
                />
            </div>
        </div>
    );
};

export default Home;