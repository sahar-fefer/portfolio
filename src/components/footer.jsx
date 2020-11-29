import React from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import { AiFillGithub, AiOutlineDribbble, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div id={'footer'} className={'container-fluid'}>
            {/* <div className={'arrow'}>
                <IoIosArrowDropup className={'arrow icon'} />
            </div> */}
            <div className={'c col-auto'}>
                © 2020 <span className={'name'}>Sahar Feferovich</span>
            </div>
            <div className={'icons-wrapper col-auto '}>
                <AiFillGithub className={'icon'} />
                <AiOutlineDribbble className={'icon'} />
                <AiOutlineLinkedin className={'icon'} />
            </div>
        </div>
    );
};

export default Footer;