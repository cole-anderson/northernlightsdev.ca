import React from 'react'
import Draggable from 'react-draggable'
import { useState } from 'react';
import "./home.css"
// Window widget that takes prop that determines what the window displays(options: terminal, blog, resume)

export default function Window({ windowRoute }) {
    return (
        <Draggable >
            <div className="terminal-box">
                <div>{windowRoute}</div>
            </div>
        </Draggable >
    )
}
