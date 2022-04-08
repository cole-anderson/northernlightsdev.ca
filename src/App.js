import React from 'react'
import Home from './Components/Home';
import Window from './Components/Window';
import WindowManager from './Components/WindowManager';

/** Terminal window in a desktop enviroment
1) when page loads script executes that display some info, then allows for user input
2) Background has icons that go to different pages(they dont actuall go to a diff page they open a new box that display the given information)

*/

function App() {

  return (
    <WindowManager />
  );

}

export default App;
