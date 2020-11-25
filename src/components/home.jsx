import React from 'react';
import Typical from 'react-typical';

import background from '../media/background11.jpg';

const Home = () => {
    const homeStyle = {
        height: '100vh',
        background: 'rgb(150, 153, 158)',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <div id={'home'} className={'container-fluid'} style={homeStyle}>
            <div className={'logo'}>
                SF
            </div>
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