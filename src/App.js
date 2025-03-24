import './App.css';
import "./Components/Header/Header.css";
import "./Components/Footer/Footer.css";
import "./Components/BannerSection/bannersection.css";
import "./Components/CoreCapabilities/CoreCapabilities.css";
import "./Components/DemoSection/Demosection.css";
import "./Components/TechnologySection/TechnologySection.css";
import "./Components/BusinessSection/BusinessSec.css";
import "./Components/ReuseableComponents/WhiteButton.css";
import "./Components/EchoSection/EchoSec.css";
import "./Components/ContactSection/ContactSec.css";
import "./Components/FaqSection/FaqSection.css";
import "./responsive.css";
import React from 'react';  
import Header from './Components/Header/Header';
import Footersec from './Components/Footer/Footersec';
import Bannersection from './Components/BannerSection/Bannersection';
import Corecapabilities from './Components/CoreCapabilities/Corecapabilities';
import Demosection from './Components/DemoSection/Demosection';
import TechnologySection from './Components/TechnologySection/TechnologySection';
import { technologyData } from './DataFolder/TechnologyData';
import BusinessSec from './Components/BusinessSection/BusinessSec';
import { businessData } from './DataFolder/BusinessData';
import EchoSec from './Components/EchoSection/EchoSec';
import { echoData } from './DataFolder/EchoData';
import ContactSec from './Components/ContactSection/ContactSec';
import { contactData } from './DataFolder/ContactData';
import FaqSection from './Components/FaqSection/FaqSection';
import { faqData } from './DataFolder/FaqData';
// import { 
//   BrowserRouter as Router, Routes, Route
//  } from 'react-router';

function App() {
  return (
    <div id='home'>
    {/* <Router> */}
    <Header />
      <Bannersection />
      <Corecapabilities />
      <Demosection img="./robot.png" title="Experience the Future of " spantitle="Interaction"/>
      <TechnologySection technologyData={technologyData} style={{background:'black'}}/>
      <BusinessSec businessData={businessData} />
      <EchoSec echoData={echoData}/>
      {/* <Routes path='/Echos' element={<EchoSec echoData={echoData}/>} /> */}
      <ContactSec contactData={contactData}/>
      <FaqSection faqdata={faqData} />
      <Demosection img="./robot2.png" title="Unlock the Power of " spantitle="Logo " title2="Today" direction="lg-row-reverse flex-sm-column-reverse flex-column-reverse" width="100%" />
    <Footersec />
    {/* </Router> */}
      </div>
  );
}

export default App;
