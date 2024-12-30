import React, { useState, useEffect } from 'react';
import logoCss from './logoHeader.module.css';
import logoImg from '../images/logo2-jcbeca.png';

const LogoHeader = () => {
    const [date, setDate] = useState(new Date());

    const day = date.toLocaleDateString(undefined, { weekday: 'long' });
    const month = date.toLocaleDateString(undefined, { month: 'long' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString();

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={logoCss.outerLogo}>
            <div className={logoCss.logo}></div>
            <div className={logoCss.content}>
                <h1 className={logoCss.h2logo}>Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA)</h1>
                <h4 className={logoCss.h4}>International Journal | Open Access | Double Blind Peer Reviewed | Call for Papers | Engineering</h4>
                <p className={logoCss.p}>Published By JKRMS Publications</p>
            </div>
            <div className={logoCss.badge}>
                <div className={logoCss.number}>
                    <h2 className={logoCss.h2}>E-ISSN 3048-9695 (Online)</h2>
                    <h3 className={logoCss.h2}>IMPACT FACTOR: 0.00</h3>
                    <p className={logoCss.h2}>{`${day}, ${month} ${dayOfMonth}, ${year} ${time}`}</p>
                </div>
            </div>
        </div>
    );
};

export default LogoHeader;
