import React from "react";

const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const console_ =()=>{
    console.log("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push();
    console.log(myarray);
}
export default function Firstproject() {
  return (
    <div>
    <button onClick={alertBox}>Click Me</button>
    <button onClick={console_}>Click Me</button>
    <button onClick={check}>click me</button>
    </div>
  )
}