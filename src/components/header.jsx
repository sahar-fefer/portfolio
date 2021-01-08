import React, { useState } from 'react';
import { Link } from "react-scroll";
import { IoIosArrowDropup } from 'react-icons/io';

const Header = ({handleChangeLanguage, HEADER}) => {
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
    };

    window.addEventListener('scroll', checkHeaderBackground)
    window.addEventListener('scroll', checkScrollTop)

    const {ABOUT, PROJECTS, CONTACT, LANGUAGE} = HEADER;
    return (
        <header id={'header'} className={'container-fluid'}>
            <div className={'scroll-up-button'}>
                <IoIosArrowDropup
                    className={"scrollTop"}
                    onClick={scrollTop}
                    style={{ height: 40, display: showHeader ? 'flex' : 'none' }} />
            </div>
            <div className={`burger-nav ${isBurgerOpen ? 'open' : ''}`} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-bar ${headerBackground && 'nav-bar-scroll'}`}>
                <div className={`regular-header row ${headerBackground && 'header-scroll'}`}>
                    <div className={'col justify-content-start'}>
                        <div className={`logo ${headerBackground && 'logo-scroll'}`}
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
                            to="portfolio"
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
                    <div className={'leng col-auto'}>
                        <button onClick={handleChangeLanguage}>
                            {LANGUAGE}
                        </button>
                    </div>
                </div>
            </nav >
            <div className={`mobile-bar ${isBurgerOpen ? 'open-screen' : 'close-screen'}`}>
                <div className={'bar'}>
                    <button className={"section leng"} onClick={handleChangeLanguage}>
                        {LANGUAGE}
                    </button>
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
                            to="portfolio"
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
                </div>
            </div>
        </header>
    );
};

export default Header;