import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css"
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';
import MLProj from './components/MLProj';
import Navbar from './components/Navbar';
import OtherProj from './components/OtherProj';
import WebProj from './components/WebProj';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        {/* <Route path='/index/' element={<Home />} />
        <Route path='/index/main' element={<Main />} />
        <Route path='/index/mlproj' element={<MLProj />} />
        <Route path='/index/webproj' element={<WebProj />} />
        <Route path='/index/otherproj' element={<OtherProj />} />
        <Route path='/index/contactUs' element={<ContactUs />} /> */}


        <Route exact path='/index/'><Home /></Route>
        <Route path='/index/main'><Main /></Route>
        <Route path='/index/mlproj'><MLProj /></Route>
        <Route path='/index/webproj'><WebProj /></Route>
        <Route path='/index/otherproj'><OtherProj /></Route>
        <Route path='/index/contactus'><ContactUs /></Route>


      </Switch>
      <Footer />
    </div>
  );
}

export default App;
