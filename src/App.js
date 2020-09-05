import React from 'react';
import Greeter from './Greeter';
import Navbar from './Navbar';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import './App.css';
import Cart from "./Cart";
import Form from './Form';

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Refried Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 },
  { id: 4, name: "Ground Beef", price: 8.5, qty: 1 },
  { id: 5, name: "Cheese", price: 4.5, qty: 1 }
];

function App() {
  return (
    <div>
      <Navbar/>
      <Form/>
      <Cart initialItems={items}/>
      <Counter/>
      <Counter step={5}/>
      <MoodToggler/>
      <Greeter name={"LeBron"} age={35}/>
      <Greeter name={"Anthony"} age={26}/>
      <h3>Hello From LA!</h3>
    </div>

  );
}

export default App;
