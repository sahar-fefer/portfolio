import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDropup } from 'react-icons/io';

const Header = () => {
    // const [headerHeight, setHeaderHeight] = useState(0)
    // const cheackHeaderHeight = (e) => {
    //     console.log('e.target.clientHeight', e.target.clientHeight);
    //     setHeaderHeight(e.target.clientHeight);
    // }

    const [headerBackground, setHeaderBackground] = useState(false)
    const checkHeaderBackground = () => {
        if (!headerBackground && window.pageYOffset > window.innerHeight) {
            setHeaderBackground(true)
        } else if (headerBackground && window.pageYOffset <= window.innerHeight) {
            setHeaderBackground(false)
        }
    };

    window.addEventListener('scroll', checkHeaderBackground)

    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > window.innerHeight / 2) {
            setShowScroll(true)
            setHeaderBackground(true)
        } else if (showScroll && window.pageYOffset <= window.innerHeight / 2) {
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
                <ul className={'row'} style={{ background: headerBackground ? ' rgba(248, 248, 248, .6)' : 'none' }}>
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