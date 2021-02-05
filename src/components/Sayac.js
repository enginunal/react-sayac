/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";

const Sayac = ({baslangic, name}) => {
    const [sayacDegeri, setSayacDegeri] = useState(0);

    const Artir = () => {
        setSayacDegeri(sayacDegeri + 1);
    }

    return (
        <div className='sayac'>
            <h2>{baslangic + sayacDegeri}</h2>
            <h3>{name}</h3>
            <button className='btn' onClick={Artir} >+</button>
        </div>
    );
}

Sayac.defaultProps = {
    baslangic: 1,
}

Sayac.propTypes = {
    baslangic: PropTypes.number,
}

export default Sayac;
