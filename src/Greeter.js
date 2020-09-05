import React, {useState} from 'react';
import MoodToggler from './MoodToggler';
import './App.css';

function Greeter({name, excitement = 1, age = 18}) {
    const greet = () =>{
        const msg = `HELLO THERE, ${name}. You sure are excited!`
        console.log(msg)
    }
    return (
        <div>
        <h3>Hi there, {name}{"!".repeat(excitement)} <MoodToggler/></h3>
        <p>You are {age} years old</p>
        <button onClick={greet}> Greet</button>
    </div>
  )
}

export default Greeter;
