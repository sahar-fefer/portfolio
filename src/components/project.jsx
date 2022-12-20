import React, { useState, useEffect } from 'react';
import useHover from '../hooks/useHover';

const Project = ({ name, title, techs, web, git, language }) => {
    const [hoverRef, isHovered] = useHover();

    const [techLi, setTechLi] = useState([]);

    useEffect(() => {
        setTechLi([])
        techs.map((techName, i) => {
            return (
                setTechLi(old => [...old,
                < li key={i} className={`tech-pills perfect-center col-auto`} >
                    {techName}
                </li >
                ])
            )
        })
    }, [techs])

    return (
        <div className={`project col`} ref={hoverRef} style={{ backgroundImage: `url(${window.location.origin}/media/projects/${name}.jpg)` }}>
            <div className={`hover-project ${isHovered ? 'show' : 'hidden'}`}
                style={{
                    pointerEvents: isHovered ? 'all' : 'none'
                }}>
                <div className={`text ${isHovered ? 'show' : 'hidden'}`}>
                    <h1 className="title perfect-center">{title}</h1>
                    <ul className="pills-wrapper perfect-center flex-wrap">
                        {techLi}
                    </ul>
                </div>
                <div className={`project-buttons ${isHovered ? 'show' : 'hidden'} row justify-content-center`}>
                    <a className="link-button col-auto" href={web} target="_blank" rel='noreferrer' >
                        {language === 'en'
                            ? 'View Site'
                            : 'ראה אתר'
                        }
                    </a>
                    <a className="link-button col-auto" href={git} target="_blank" rel='noreferrer' >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;