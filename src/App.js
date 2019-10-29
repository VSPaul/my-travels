import React from 'react';
import logo from './cocktail-svgrepo-com.svg';
import './App.css';
import Travel from "./Travel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Where do I travel?
        </h1>

{/* Component that contain an array: */}
        <Travel/>


{/* Comoponent: */}
        {/* <Travel
        photo="https://www.gannett-cdn.com/presto/2019/09/30/USAT/6fffafb3-aa62-4a01-ba7a-b7545d8b1cb4-GettyImages-1138175909.jpg?width=1080&quality=50"
        destination='Tenerife'
        country='Spain'
        distance='5.239 Km'
         /> 
         <Travel
         photo="https://content.tui.co.uk/adamtui/2016_10/1_13/7ecfce0b-cd33-406d-8003-a69200dfbfaf/TUS_MTE_0803WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)"
         destination='Toscana'
         country='Italy'
         distance='1.781 Km'
         /> */}
        
{/* A link */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
      </header>
    </div>
  );
}

export default App;
