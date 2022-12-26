import React, { useState } from 'react';
import { Link } from "react-scroll";
import { IoIosArrowDropup } from 'react-icons/io';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const Header = ({ handleChangeLanguage, HEADER, language }) => {
    const { ABOUT, PROJECTS, CONTACT, LANGUAGE, RESUME } = HEADER;
    const [showHeader, setShowHeader] = useState(false)
    const [headerBackground, setHeaderBackground] = useState(false)
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    const checkHeaderBackground = () => {
        if (!headerBackground && window.scrollY >= (window.innerHeight - 80)) {
            setHeaderBackground(true)
        } else if (headerBackground && window.scrollY <= (window.innerHeight - 80)) {
            setHeaderBackground(false)
        }
    };

    const checkScrollTop = () => {
        if (!showHeader && window.pageYOffset > window.innerHeight / 2) {
            setShowHeader(true)
            setHeaderBackground(true)
        } else if (showHeader && window.pageYOffset <= window.innerHeight / 2) {
            setShowHeader(false)
            setHeaderBackground(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsBurgerOpen(false)
    };

    window.addEventListener('scroll', checkHeaderBackground)
    window.addEventListener('scroll', checkScrollTop)

    return (
        <header id={'header'} className={'container-fluid'}>
            <div className={'scroll-up-button'}>
                <IoIosArrowDropup
                    className={"scrollTop"}
                    onClick={scrollTop}
                    style={{ height: 40, display: showHeader ? 'flex' : 'none' }} />
            </div>
            <div className={`burger-nav ${isBurgerOpen ? 'open' : ''}`}
                style={language === 'en' ? { right: '30px' } : { left: '30px' }}
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-bar ${headerBackground && 'nav-bar-scroll'}  ${isBurgerOpen ? 'open-screen' : 'close-screen'}`}>
                <div className={`regular-header row ${headerBackground && 'header-scroll'}`}>
                    <div className={`col`}>
                        <div className={`logo ${headerBackground && 'logo-scroll'}  ${language === 'en' ? 'mr-auto' : 'ml-auto'}`}
                            onClick={scrollTop}>
                            SF
                        </div>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-50}
                            duration={500}>
                            {ABOUT}
                        </Link>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-50}
                            duration={500}>
                            {PROJECTS}
                        </Link>
                    </div>
                    <div className={'link-wrapper col-auto'}>
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-50}
                            duration={500}>
                            {CONTACT}
                        </Link>
                    </div>
                    <div className={'link-wrapper leng col-auto'}>
                        <button onClick={handleChangeLanguage}>
                            {LANGUAGE}
                        </button>
                    </div>
                    <a href={process.env.PUBLIC_URL + './media/Sahar Feferovich - Resume.pdf'} target='_blank'><HiOutlineDocumentDownload className={'link-wrapper col-auto'} /></a>
                </div>
            </nav >
            <div className={`mobile-bar ${isBurgerOpen ? 'open-screen' : 'close-screen'}`}>
                <div className={'bar'}>
                    <div className={'section'}>
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-75}
                            duration={500}
                            onSetActive={() => setIsBurgerOpen(false)}>
                            {ABOUT}
                        </Link>
                    </div>
                    <div className={'section'}>
                        <Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-75}
                            duration={500}
                            onSetActive={() => setIsBurgerOpen(false)}>
                            {PROJECTS}
                        </Link>
                    </div>
                    <div className={'section'}>
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-75}
                            duration={500}
                            onSetActive={() => setIsBurgerOpen(false)} >
                            {CONTACT}
                        </Link>
                    </div>
                    <div className="section">
                        <a href={process.env.PUBLIC_URL + './media/Sahar Feferovich - Resume.pdf'} target='_blank'><HiOutlineDocumentDownload />{RESUME}</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;