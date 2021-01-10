// import React from 'react';
// import Typical from 'react-typical';

// const Home = () => {
//     return (
//         <div id={'home'} className={'container-fluid'}>
//             <div className={'header-wrapper'}>
//                 <h1 className={'header'}>
//                     Hey! I'm <span className={'name'}>Sahar Feferovich</span>
//                 </h1>
//                 <h2 className={'about'}>
//                     I'm A Fullstack Developer
//                 </h2>
//                 <Typical
//                     loop={Infinity}
//                     className={'typing'}
//                     steps={[
//                         `text text`,
//                         5000,
//                         `text blabla`,
//                         5000
//                     ]}
//                     wrapper="h2"
//                 />
//             </div>
//         </div>
//     );
// };

// export default Home;


import React from 'react';
import Typical from 'react-typical';

const Home = ({ HOME }) => {
    const { TITLE, NAME, ABOUT, TYPING } = HOME;

    return (
        <div id={'home'} className={'container-fluid'}>
            <div className={'header-wrapper'}>
                <h1 className={'header'}>
                    {TITLE}<span className={'name'}>{NAME}</span>
                </h1>
                <h2 className={'about'}>
                    {ABOUT}
                </h2>
                <Typical
                    loop={Infinity}
                    className={'typing'}
                    steps={TYPING}
                    wrapper="h2"
                />
            </div>
        </div>
    );
};

export default Home;