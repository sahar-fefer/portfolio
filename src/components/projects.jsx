import React from 'react';
import Website from './website';

const Projects = () => {
    return (
        <div id={'projects'} className={'container-fluid'}>
            <h1 className="component-header">Portfolio</h1>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <Website className={'col col-md-6'}
                        name={'connect4'}
                        title={'Connect 4'}
                        description={''}
                        techs={['React', 'Sass', 'React-Router', 'Git']}
                        web={''}
                        gitFront={'https://github.com/saharovich/connect-4'} />
                    <Website className={'col col-md-6'}
                        name={'saharEstate'}
                        title={'Real Estate Wesite'}
                        description={''}
                        techs={['React', 'Sass', 'React-Router', 'Node.JS', 'Git']}
                        web={''}
                        gitFront={'https://github.com/saharovich/sahar-estate-web'}
                        gitBack={'https://github.com/saharovich/sahar-estate-server'} />
                    <Website className={'col col-md-6'}
                        name={'salt&fefer'}
                        title={'Catering Website'}
                        description={''}
                        techs={['WordPress']}
                        web={'http://www.feferovich.co.il/'}
                        gitFront={''} />
                    <Website className={'col col-md-6'}
                        name={'readMyLips'}
                        title={'Clear Mask Online Shop'}
                        description={''}
                        techs={['WIX']}
                        web={'https://www.readmylips-mask.com/'}
                        gitFront={''} />
                        <Website className={'col col-md-6'}
                        name={'pepe'}
                        title={'Digital event producer'}
                        description={''}
                        techs={['WIX']}
                        web={'https://www.pepeimpresario.com/'}
                        gitFront={''} />
                </div>
            </div>
        </div>
    );
};

export default Projects;