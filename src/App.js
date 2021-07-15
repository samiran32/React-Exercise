import React from 'react';
import Button from './Button'
import "./style.css"
import logo from "./logo512.png"

const App = ()=> {
    return(
        <div>
            <p id = "p">Hello World!</p>
            <Button buttonText= "Hello"/>
            <Button buttonText= "React"/>
            <Button buttonText= "Learner"/>
            <img src={logo} alt ="Logo" />

        </div>
    )
        
}

export default App