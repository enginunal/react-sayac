/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Sayaclar from "./components/Sayaclar";
import Footer from "./components/Footer"
import Header from "./components/Header"
import { SayaclarProvider } from "./SayaclarContext";

function App() {  
  return (
    <div className='container'>
      <SayaclarProvider>
        <Header />
        <Sayaclar />
        <Footer />
      </SayaclarProvider>
    </div>
  );
}

export default App;
