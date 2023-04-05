import React from 'react';
import './App.css';

function Greet() {
  return (
    <div className="hma">
    <img id='logo' src='https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png' width={100} height={100}></img>
     <h1><Greetings name="HOTEL   HMA_DHAS"/></h1>
     <marquee direction="right">
     <p><h4>Think healthy food.......think HMA-DHAS</h4></p>
     </marquee>
     <button onClick={"box"}>Sort</button>
     <button onClick={"box"}>Nearest</button>
     <button onClick={"box"}>Rating 4.0+</button>
     <button onClick={"box"}>New Arrivals</button>
     <button onClick={"box"}>Directions</button>
     <p align="center"><b>Muhammad Abrar H</b></p>
     <p align="center"><b>84536 36789</b></p>
     <p align="center"><b>Insta: abrar_hma</b></p>
     <p align="center"><b>Fb: Md Abrar</b></p>
     <p align="center"><b>Wa : https://placement.skcet.ac.in</b></p>
    </div>
  );
}

export default Greet;