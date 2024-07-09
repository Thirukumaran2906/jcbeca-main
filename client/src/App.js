import React from 'react';
import Header from './MainComponents/Header';
import { Routes, Route } from "react-router-dom";
import { Footer } from './MainComponents/Footer';
import Main from './page3/Main'
import Page2 from './page2/Page2';
import Home from './page1/Home';
import AppCss from './App.module.css'
import LogoHeader from './MainComponents/LogoHeader';
import Volumes from './MainComponents/Volumes';
import Login from './MainComponents/Login';
import Issue from './MainComponents/Issue';
import Manual from './MainComponents/Manual';


function App() {


  return (
    <div> 
    <LogoHeader />
       <Header />
       <div className={AppCss.App}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/authour' element={ <Page2 />} />
        <Route path='/main' element={<Main />} />
        <Route path='/volumes' element={<Volumes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/issue' element={<Issue />} />
        <Route path='/manual' element={<Manual />} />
      </Routes>
      </div>
      <Footer />
    </div>

   
  );
}

export default App;
