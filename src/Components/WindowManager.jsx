import React, { useState } from 'react'
import Window from './Window';

/**
 * Manages "Windows" Component Creation and Deletion
 * 
 * -> Allows user to dynamically and "uniquely" manipulate windows on the webpage
 */

export default function WindowManager() {

    // const [windowArray, setWindowArray] = useState([]);

    let windowArray = []

    // let test = "hello world"
    // let val = <Window windowRoute={test} />;

    //test to create multiple windows
    WindowArrayManipulator("hello");
    WindowArrayManipulator("world");

    // windowArray.forEach(element => {
    //   console.log(element)
    // });
    console.log(windowArray)

    return (
        <>
            {/* Dynamically renders and re-renders array of Window Components */}
            {
                windowArray.map(comp => {
                    return (
                        <div key={comp.key}>{comp}</div>
                    );
                })
            }

            {/* <button onClick={setWindowArray()}>Click Me</button> */}
        </>
    );

    function WindowArrayManipulator(name) {
        let tempWindow = <Window key={name} windowRoute={name} />
        windowArray.push(tempWindow);
    }
}
