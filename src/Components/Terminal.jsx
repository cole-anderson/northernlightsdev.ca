import React from 'react';
import './Terminal.css';
import Draggable from 'react-draggable';

function Terminal() {
    return (
        <Draggable>
            <div className="terminal">
                <form className="terminal_text">
                    <label align="left">
                        Enter Your Name:
                        <input></input>
                    </label>
                </form>
            </div>
        </Draggable >
    );
}
function test() {
    console.log("this is a test")
}

export default Terminal;
