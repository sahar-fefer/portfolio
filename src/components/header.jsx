import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDropup } from 'react-icons/io';

const Header = () => {
    const [headerBackground, setHeaderBackground] = useState(false)
    const checkHeaderBackground = () => {
        if (!headerBackground && window.pageYOffset > 750) {
            setHeaderBackground(true)
        } else if (headerBackground && window.pageYOffset <= 750) {
            setHeaderBackground(false)
        }
    };

    window.addEventListener('scroll', checkHeaderBackground)

    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
            setHeaderBackground(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
            setHeaderBackground(false)
        }
    };

    window.addEventListener('scroll', checkScrollTop)

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header id={'header'} className={'container-fluid'}>
            <IoIosArrowDropup
                className={"arrow icon scrollTop"}
                onClick={scrollTop}
                style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
            <nav>
                <ul className={'row'}  style={{ background: headerBackground ? ' #f8f8f8' : 'none' }}>
                    <li className={'logo col'}>
                        SF
                    </li>
                    <li className={'link-li col-auto'}>
                        <Link>
                            Project
                    </Link>
                    </li>
                    <li className={'link-li col-auto'}>
                        <Link>
                            About
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
        </header>
    );
};

export default Header;