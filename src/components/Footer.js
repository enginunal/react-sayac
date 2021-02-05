/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { SayaclarContext } from "../SayaclarContext";

const Footer = () => {
    const [sayaclar, setSayaclar] = useContext(SayaclarContext);

    return (
        <div className='sayac' style={{border:"1px ridge lightblue"}}>
            <h3 style={{color: "steelblue"}}>Toplam sayaç sayısı {sayaclar.length} adettir.</h3>
        </div>
    );
}

export default Footer;
