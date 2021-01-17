import React from 'react';
import Website from './website';

const Projects = ({ PROJECTS, language }) => {
    const { SECTION_TITLE, CONNECT4, SAHAR_ESTATE, SALT_FEFER, READ_MY_LIPS, PEPE } = PROJECTS;
    console.log('SECTION_TITLE',SECTION_TITLE);
    return (
        <div id={'projects'} className={'container-fluid'}>
{            <h1 className="component-header">{SECTION_TITLE}</h1>
}            <div className="container-fluid">
                <div className="row justify-content-center">
                    {/* <Website className={'col col-md-6'} */}
                    <Website 
                        name={'connect4'}
                        title={CONNECT4}
                        techs={['React', 'Sass', 'React-Router', 'Git']}
                        web={''}
                        gitFront={'https://github.com/saharovich/connect-4'}
                        language={language} />
                    {/* <Website className={'col col-md-6'} */}
                    <Website 
                        name={'saharEstate'}
                        title={SAHAR_ESTATE}
                        description={''}
                        techs={['React', 'Sass', 'React-Router', 'Node.JS', 'Git']}
                        web={''}
                        gitFront={'https://github.com/saharovich/sahar-estate-web'}
                        gitBack={'https://github.com/saharovich/sahar-estate-server'}
                        language={language} />
                    {/* <Website className={'col col-md-6'} */}
                    <Website 
                        name={'salt&fefer'}
                        title={SALT_FEFER}
                        description={''}
                        techs={['WordPress']}
                        web={'http://www.feferovich.co.il/'}
                        gitFront={''}
                        language={language} />
                    {/* <Website className={'col col-md-6'} */}
                    <Website 
                        name={'readMyLips'}
                        title={READ_MY_LIPS}
                        description={''}
                        techs={['WIX']}
                        web={'https://www.readmylips-mask.com/'}
                        gitFront={''}
                        language={language} />
                    {/* <Website className={'col col-md-6'} */}
                    <Website 
                        name={'pepe'}
                        title={PEPE}
                        description={''}
                        techs={['WIX']}
                        web={'https://www.pepeimpresario.com/'}
                        gitFront={''}
                        language={language} />
                </div>
            </div>
        </div>
    );
};

export default Projects;