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

export default Terminal;
