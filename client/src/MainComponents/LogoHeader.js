import React from 'react'
import logoCss from './logoHeader.module.css'
import{ useState, useEffect } from 'react';

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
    <div class={logoCss.outerLogo}>
        <div class={logoCss.logo}></div>
        <div class={logoCss.content}>
            <h2 className={logoCss.h2}>Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA)</h2>
            <h4 className={logoCss.h4}>(International Journal | Open Access | Double Blind Peer Reviewed | Call for Papers )</h4>
            <p className={logoCss.p}> site is under Under Development</p>
            <p className={logoCss.p}>site is under Under Development</p>
        </div>
        <div class={logoCss.badge}>
            <div class={logoCss.number}>
                <h2 className={logoCss.h2}> E-ISSN xxxx-xxxx</h2>
                <h3 className={logoCss.h2}>IMPACT FACTOR: 0.00</h3>
                <p className={logoCss.h2}>{`${day}, ${month} ${dayOfMonth}, ${year} ${time}`}</p>
            </div>
            <div class={logoCss.logoBadge}></div>
        </div>
    </div>
  )
}

export default LogoHeader
