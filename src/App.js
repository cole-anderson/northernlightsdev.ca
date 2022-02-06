import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Draggable from 'react-draggable';
import Terminal from './Components/Terminal.jsx';
import Home from './Components/Home.jsx'
import Header from './Components/Header';
import Footer from './Components/Footer.js';
import BackOne from './Components/BackgroundOne.js';
import BackTwo from './Components/BackgroundTwo.js';
import BackThree from './Components/BackgroundThree.js';
import TextBox from './Components/TextBox.js';

function App() {
  return (
    <div>
      <BackOne />
      <TextBox />
      <BackTwo />
      <BackThree />
    </div>


  );
}

export default App;

// <Router>
    //   <div>
    //     <Header />
    //     <div>
    //       <><Home /><Terminal /></>
    //     </div>
    //     <Footer />
    //   </div>
    // </Router>
