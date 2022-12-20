import React from 'react';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { FaCodepen, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ FOOTER }) => {
    const { NAME, COPYRIGHT } = FOOTER
    return (
        <footer id={'footer'}>
            <div className="container-fluid">
                <div className="row wrapper">
                    <div className={'c col-auto'}>{COPYRIGHT}<span className={'name'}>{NAME}</span></div>
                    <div className={'icons-wrapper col-auto'}>
                        <a href="https://codepen.io/saharovich" target='_blank' rel='noreferrer'><FaCodepen className={'icon codepen'} /></a>
                        <a href="https://github.com/saharovich" target='_blank' rel='noreferrer'><FaGithub className={'icon github'} /></a>
                        <a href="https://www.linkedin.com/in/sahar-feferovich-895a76190/" target='_blank' rel='noreferrer'><FaLinkedinIn className={'icon linkedin'} /></a>
                        <a href={process.env.PUBLIC_URL + './media/Sahar Feferovich - Resume.pdf'} target='_blank' rel='noreferrer'><HiOutlineDocumentDownload className={'icon download'} /></a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;