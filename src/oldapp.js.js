import React from 'react'
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Draggable from 'react-draggable';
// import Terminal from './Components/Terminal.jsx';
// import Home from './Components/Home.jsx'
// import Header from './Components/Header';
// import Footer from './Components/Footer.js';
import BackOne from './oldapp/BackgroundOne.js';
import BackTwo from './oldapp/BackgroundTwo.js';
import BackThree from './oldapp/BackgroundThree.js';
import TextBoxOne from './oldapp/TextBoxOne.js';
import TextBoxTwo from './oldapp/TextBoxTwo.js';
// import TextBoxThree from './Components/TextBoxThree.js';

function App() {
  return (
    <div>
      <BackOne />
      <TextBoxOne />
      <BackTwo />
      <TextBoxTwo />
      <BackThree />
    </div>


  );
}

export default App;

//extra stuff
// <Router>
    //   <div>
    //     <Header />
    //     <div>
    //       <><Home /><Terminal /></>
    //     </div>
    //     <Footer />
    //   </div>
    // </Router>
