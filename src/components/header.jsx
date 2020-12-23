import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDropup } from 'react-icons/io';

const Header = () => {
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
    return (
        <header id={'header'} className={'container-fluid'}>
            <IoIosArrowDropup
                className={"arrow icon scrollTop"}
                onClick={scrollTop}
                style={{ height: 40, display: showHeader ? 'flex' : 'none' }} />
            <div className={`burger-nav ${isBurgerOpen ? 'open' : ''}`} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-bar ${headerBackground && 'nav-bar-scroll'}`}>
                <ul className={`row  ${headerBackground && 'ul-scroll'}`}>
                    <li className={'col justify-content-start'}>
                        <div className={`logo ${headerBackground && 'logo-scroll'}`}
                            onClick={scrollTop}>
                            SF
                        </div>
                    </li>
                    <li className={'link-li col-auto'}>
                        <Link>
                            About
                    </Link>
                    </li>
                    <li className={'link-li col-auto'}>
                        <Link>
                            Project
                    </Link>
                    </li>
                    <li className={'link-li col-auto'}>
                        <Link>
                            Contact
                    </Link>
                    </li>
                    <li className={'leng-li col-auto'}>
                        <button>
                            EN
                    </button>
                    </li>
                </ul>
            </nav >
            <div className={`menu-screen ${isBurgerOpen ? 'open-screen' : 'close-screen'}`}>
                <ul>
                    <li>
                        <Link>
                            Project
                    </Link>
                    </li>
                    <li>
                        <Link>
                            About
                    </Link>
                    </li>
                    <li>
                        <Link>
                            Contact
                    </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;