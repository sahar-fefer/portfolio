import React from 'react';
import { Link } from "react-router-dom"; 

const SideNav = () => {
    return (
        <nav id={'side-nav'}>
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
                <li>
                    <button>
                        EN
                    </button>
                </li>
            </ul>
        </nav >
    );
};

export default SideNav;