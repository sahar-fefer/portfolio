import React from 'react';
import Card from './card';

const Projects = ({ PROJECTS, language }) => {
    const { SECTION_TITLE, CONNECT4, SAHAR_ESTATE, SALT_FEFER, READ_MY_LIPS, PEPE } = PROJECTS;
    return (
        <div id={'projects'} className={'container-fluid'}>
            <h1 className="component-header">{SECTION_TITLE}</h1>
            <div className="container">
                <Card
                    name={'connect4'}
                    title={CONNECT4}
                    techs={['React.JS']}
                    web={''}
                    git={'https://github.com/saharovich/connect-4'}
                    language={language} />
                <Card
                    name={'saharEstate'}
                    title={SAHAR_ESTATE}
                    description={''}
                    techs={['React.JS', 'Node.JS']}
                    web={''}
                    git={'https://github.com/saharovich/sahar-estate-web'}
                    language={language} />
                <Card
                    name={'salt&fefer'}
                    title={SALT_FEFER}
                    description={''}
                    techs={['WordPress']}
                    web={'http://www.feferovich.co.il/'}
                    git={''}
                    language={language} />
                <Card
                    name={'readMyLips'}
                    title={READ_MY_LIPS}
                    description={''}
                    techs={['WIX']}
                    web={'https://www.readmylips-mask.com/'}
                    git={''}
                    language={language} />
                <Card
                    name={'pepe'}
                    title={PEPE}
                    description={''}
                    techs={['WIX']}
                    web={'https://www.pepeimpresario.com/'}
                    git={''}
                    language={language} />
            </div>
        </div>
    );
};

export default Projects;