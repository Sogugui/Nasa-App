import {BrowserRouter} from 'react-router-dom';
import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import {landingContext} from './context/landingContext'


function App() {
  const [landing,setLanding]= useState([])

  const asteroid = {
    landing,
    setLanding
  }

  return (
    <div className="App">
    <landingContext.Provider value={asteroid}>
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
      </landingContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;