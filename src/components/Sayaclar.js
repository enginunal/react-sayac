/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import Sayac from "./Sayac";
import { SayaclarContext } from "../SayaclarContext";

const Sayaclar = () => {
    const [sayaclar, setSayaclar] = useContext(SayaclarContext);
    
    useEffect(() => {
        const fetchSayacData = async () => {
            const res = await fetch('http://localhost:5000/sayaclar');
            const data = await res.json();
            setSayaclar(data);
        }
        fetchSayacData();
    }, []);

    return (
        <div>
            {
                sayaclar.map((sayac) => (
                    <Sayac baslangic={sayac.startVal} key={sayac.id} name={sayac.name} />
                ))
            }
        </div>
    );
}

export default Sayaclar;
