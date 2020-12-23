import React from 'react';

const Linkedin = () => {
    return (
        <div id={'linkedin'}>
            <div className={"linkedin-cover-img"} />
            <div className={"linkedin-profile-img"} />
            <h1 className={"linkedin-name perfect-center"}>
                Sahar Feferovich
                </h1>
            <p className={"linkedin-info perfect-center"}>
                Full Stack Developer
                </p>
            <div className={"link-wrapper perfect-center"}>
                <a className={"link-linkedin-profile"} href="https://www.linkedin.com/in/sahar-feferovich/" target="_blank">
                    View Profile
            </a>
            </div>
            <footer className={"linkedin-footer perfect-center"}>
                <img src="/media/linkedin.png" alt="linkedin logo" className={"linkedin-logo"} />
            </footer>
        </div>
    );
};

export default Linkedin;