import Entry from './enter';


import Gau from './Day7';
 import Hooks from './Day8';
 import Home from './Home';
import NavBar from './Navbar';
import Singers from './Singers';
import Albums from './Albums';
import { BrowserRouter,Routes,Link,Route } from 'react-router-dom';
import Web from './Day2';
import { useState } from 'react';
import { YY } from './List';
import Details from './Details';

function createEntry(item) {
  return (
    <Entry
      key={item.id}
      imgUrl={item.imgUrl}
      name={item.name}
      price={item.price}
    />
  );
}

export default function App() {
  const[item,setItem]=useState(YY);
   console.log(item);
  return (
    <div>
      <h1 style={{ textAlign:"center"}}>
         List Of Products
      </h1>
      <dl >{item.map(createEntry)}</dl>
      
      <Gau/>
      <Hooks/>
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/singers' element={<Singers />}></Route>
          <Route path='/albums' element={<Albums />}></Route>
      </Routes>
      <Details/>
    

    </div>
  );
}


    