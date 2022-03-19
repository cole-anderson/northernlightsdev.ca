import Draggable from 'react-draggable';
import React from 'react'

export default function Home() {
    return (
        <Draggable>
            <div className="box">
                <div>Move me around!</div>
            </div>
        </Draggable>
    )
}
