/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { SayaclarContext } from "../SayaclarContext";

const Header = () => {
    const [sayaclar, setSayaclar] = useContext(SayaclarContext);

    return (
        <div className='sayac' style={{backgroundColor:"yellowgreen" }}>
            <h3 style={{ color: "darkblue" }}>Gösterilen Sayaçlar : {sayaclar.map(sayac => (' [' + sayac.name + '] '))}</h3>
        </div>
    );
}

export default Header;
