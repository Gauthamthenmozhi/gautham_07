import React from 'react'
import './proj.css';

export default function Web() {
    const handleInput=()=>{
    
        alert("Your response is recorded");
    }
  return (
    <div>
    <h1 id='word'>  GAUTHAM COMPANY</h1>
    <div id="p"><a href='https://www.instagram.com/r_g_ragul/'><img id='t' src='https://t3.ftcdn.net/jpg/04/55/48/64/360_F_455486463_SGk0oRbuXehINnJk3BtWkYzCbNMLyPB2.jpg'></img></a>
    </div>
    <h4><b>AVAILABLE ITEMS: </b></h4><br></br>
    <ul><a class='pro' href='https://www.google.com/aclk?sa=l&ai=DChcSEwiR1q3GpYD-AhVEJCsKHfw4CZsYABABGgJzZg&sig=AOD64_2kkwaDkKkFO8W_xdLFltnmg-K9qg&q&adurl&ved=2ahUKEwiSw6bGpYD-AhXzTGwGHTLLAlUQ0Qx6BAgJEAM'>iPhone</a></ul>
    <ul><a class='pro' href='https://www.apple.com/in/ipad/'>iPad</a></ul>
    <ul><a class='pro' href='https://www.apple.com/in/shop/buy-watch'>Apple Watch</a></ul>
    <ul><a class='pro' href='https://tv.apple.com/'>Apple TV</a></ul>
    <label>Rate the platform: </label>
    <input type='text' name="fname" ></input><br></br><br></br>
    <button type='button'  onClick={handleInput}>submit</button>

    <br></br>
    <h1>contact us through: </h1>
    <a href='https://www.instagram.com/r_g_ragul/'><img id='in' src='https://cdn-icons-png.flaticon.com/512/174/174855.png'></img></a> 


    </div>
  )
}