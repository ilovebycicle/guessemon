import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import Demon_sprite from './data/spr/Demon_sprite.png'

function Quiz() {
    return (
        <body className = "Quiz-foundation">
            <img
                src={Demon_sprite}
            />
        </body>
    )

}

export default Quiz;