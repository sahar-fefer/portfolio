import React, { useState, useEffect } from 'react';
import useHover from '../hooks/useHover';

const Website = ({ name, title, description, techs, web, git }) => {
    const [hoverRef, isHovered] = useHover();

    const [techLi, setTechLi] = useState([]);

    const techGenerator = () => {
        setTechLi([])
        for (const techName of techs) {
            setTechLi(old => [...old,
            < li className={`tech-pills perfect-center col-auto`} >
                {techName}
            </li >
            ])
        }
    }

    useEffect(() => {
        techGenerator()
    }, [])

    return (
        // style={{backgroundImage: `url(/media/${title}.jpg)`}}
        <div className={`${name} website`} ref={hoverRef}>
            {/* {isHovered &&  */}
            <div className={`hover-website ${isHovered ? 'show' : 'hidden'}`}>
                <h1 className="header perfect-center">{title}</h1>
                <p className="description perfect-center">{description}</p>
                <div className="ul-wrapper perfect-center">
                    <ul className="perfect-center flex-wrap">
                        {techLi}
                    </ul>
                </div>
                <div className="row justify-content-center">
                    <a className="link-button col-auto" href={`${web ? web : '/'}`} target="_blank" >
                        Vieu Sise {!web && ' - soon'}
                    </a>
                    <a className="link-button col-auto" href={`${git ? git : '/'}`} target="_blank" >
                        GitHub  {!git && ' - soon'}
                            </a>
                </div>
            </div>
            {/* } */}
        </div>
    );
};

export default Website;