import React from 'react'
import Draggable from 'react-draggable'
import "./home.css"
// Window widget that takes prop that determines what the window displays(options: terminal, blog, resume)

export default function Window({ windowRoute }) {
    return (
        <Draggable>
            <div className="terminal-box">
                <div>WindowRoute</div>
            </div>
        </Draggable>
    )
}
