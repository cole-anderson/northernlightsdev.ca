import React from 'react'
import Home from './Components/Home';
import Window from './Components/Window';

/** Terminal window in a desktop enviroment
1) when page loads script executes that display some info, then allows for user input
2) Background has icons that go to different pages(they dont actuall go to a diff page they open a new box that display the given information)

*/

function App() {

  let test = "hello world"

  return (
    <Window windowRoute={test} />

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
