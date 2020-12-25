import React from 'react';
import Website from './website';

const Portfolio = () => {
    return (
        <div id={'portfolio'} className={'container-fluid'}>
            <h1 className="component-header">Portfolio</h1>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <Website className={'col col-md-6'}
                        name={'contact4'}
                        title={'Contact 4'}
                        description={'A game'}
                        techs={['React', 'Sass', 'React-Router', 'Node.JS', 'Git']}
                        web={''}
                        git={'https://github.com/saharovich/4_in_a_row'} />
                    <Website className={'col col-md-6'}
                        name={'sahar-estate'}
                        title={'Sahar Estate'}
                        description={'Estate Website to find your next house'}
                        techs={['React', 'Sass', 'React-Router', 'Node.JS', 'Git']}
                        web={''}
                        git={'https://github.com/saharovich/sahar-estate-web'} />
                    <Website className={'col col-md-6'}
                        name={'contact4'}
                        title={'Contact 4'}
                        description={'A game'}
                        techs={['React', 'Sass', 'React-Router', 'Node.JS', 'Git']}
                        web={''}
                        git={''} />
                    <Website className={'col col-md-6'}
                        name={'contact4'}
                        title={'Contact 4'}
                        description={'A game'}
                        techs={['React', 'Sass', 'React-Router', 'Node.JS', 'Git']}
                        web={''}
                        git={''} />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;