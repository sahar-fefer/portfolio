import React, { useState, useEffect } from 'react';
import useHover from '../hooks/useHover';

const Card = ({ name, title, techs, web, git, language }) => {
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
        <div className={`card col`} ref={hoverRef} style={{ backgroundImage: `url(${window.location.origin}/media/projects/${name}.jpg)` }}>
            <div className={`hover-card ${isHovered ? 'show' : 'hidden'}`}>
                <div className={`text ${isHovered ? 'show' : 'hidden'}`}>
                    <h1 className="title perfect-center">{title}</h1>
                    <ul className="pills-wrapper perfect-center flex-wrap">
                        {techLi}
                    </ul>
                </div>
                <div className={`card-buttons ${isHovered ? 'show' : 'hidden'} row justify-content-center`}>
                    {
                        web
                            ? <a className="link-button col-auto" href={web} target="_blank" >
                                {language === 'en'
                                    ? 'Vieu Sise'
                                    : 'ראה אתר'
                                }
                            </a>
                            : <div className="link-button col-auto" style={{ cursor: "context-menu" }}>
                                {language === 'en'
                                    ? 'Vieu Sise - soon'
                                    : 'ראה אתר - בקרוב'
                                }
                            </div>
                    }
                    {
                        git
                        && <a className="link-button col-auto" href={git} target="_blank" >
                            GitHub
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;