import React from 'react';
import { Link } from "react-router-dom"; 

const SideNav = () => {
    return (
        <nav id={'side-nav'}>
            <ul>
                <li className={'link-li'}>
                    <Link>
                        Project
                    </Link>
                </li>
                <li className={'link-li'}>
                    <Link>
                        About
                    </Link>
                </li>
                <li className={'link-li'}>
                    <Link>
                        Contact
                    </Link>
                </li>
                <li className={'leng-li'}>
                    <button>
                        EN
                    </button>
                </li>
            </ul>
        </nav >
    );
};

export default SideNav;