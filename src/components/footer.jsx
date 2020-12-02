import React from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import pdf from '../media/Sahar Feferovich - Resume.pdf'

const Footer = () => {
    return (
        <footer id={'footer'} className={'container-fluid'}>
            <div className={'c col-auto'}>
                © 2020 <span className={'name'}>Sahar Feferovich</span>
            </div>
            <div className={'icons-wrapper col-auto '}>
                <a href="https://github.com/saharovich" target='_blank'><FaGithub className={'icon github'} /></a>
                <a href="https://www.linkedin.com/in/sahar-feferovich-895a76190/" target='_blank'><FaLinkedinIn className={'icon linkedin'} /></a>
                <a href={pdf} target='_blank'><HiOutlineDocumentDownload className={'icon download'} /></a>
            </div>
        </footer>
    );
};

export default Footer;