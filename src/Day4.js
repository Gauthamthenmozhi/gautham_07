import React, { useState } from 'react'
import './Day4.css'
export default function Day4() {

    const[input,setInput]=useState("");
    const[output,setOutput]=useState("");

    function handleChange(event)
    {
        setInput(event.target.value);
    }
    function handleClick()
    {
        setOutput(input);
        setInput("");
}


  return (
    <div className='day4'>
      <p>ENTER YOUR FAVORITE FRUIT:</p>
    <form>
    <br></br>
    <p>NAME:</p>
    <input type="text" placeholder='enter the name' onChange={handleChange} value={input} ></input>
    <p>select category:</p>
       <select name="fruit"  >
       <input  type='text' placeholder='fruits' ></input>
       <option value="fruits">ORANGE</option>
       <option value="fruits">APPLE</option>
       <option value="fruits">BANANA</option>
       <option value="fruits">FIG</option>
       <option value="fruits">JACK</option>
       
       </select>
    
    </form>
    <br></br>
    <button id='button' onClick={handleClick} >SUBMIT</button>
    <h1>IT's {output}</h1>  
    </div>
  )
}