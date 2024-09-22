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
import DocumentDetails from './MainComponents/DocumentDetails';
import ContactUs from './MainComponents/ContactUs';
import EthicalPage from './EthicalsFolder/EthicalPage';
import ViewPapersAdmin from './MainComponents/ViewPapersAdmin';
import ThankYou from './MainComponents/ThankYou';
import DocIframre from './MainComponents/DocIframre';



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
        <Route path='/archives' element={<Volumes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/manual' element={<Manual />} />
        <Route path='/ethics' element={<EthicalPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/documents/:volumeNumber/:issue" element={<DocumentDetails />} />
        <Route path="/thank" element={<ThankYou />} />
        <Route path="//volumes/issue/document" element={<DocIframre />} />
      </Routes>
      </div>
      <Footer />
    </div>

   
  );
}

export default App;
