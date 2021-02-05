/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react";
import Sayaclar from "./components/Sayaclar";

export const SayaclarContext = createContext();

export const SayaclarProvider = (props) => {
    const [sayaclar, setSayaclar] = useState([]);

    return (
        <SayaclarContext.Provider value={[sayaclar, setSayaclar]}>
            {props.children}
        </SayaclarContext.Provider>
    );
}