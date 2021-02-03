import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section id={'page-not-found'}>
            <img src={"./media/page_not_found.jpg"} 
            alt={"Oops, page not found (404 alert)"}
            className={'page-not-found-img'}/>
            <Link to='/' className={'link-to-home'}>
                Back To Home Page
            </Link>
        </section>
    );
};

export default PageNotFound;