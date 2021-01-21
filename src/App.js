import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

const itemList = [
  {
    task: 'clean',
    id: 1
  },
  {
    task: 'eat',
    id: 2
  }
];

const App = () => {

  const [list, setList] = useState(itemList);

  const handleChange = (event) => {
    console.log("wow");
  }

  return (
    <div className="App">
      <h1>to do list</h1>
      <Input onHandle={handleChange}/>
      <List list={itemList}/>
    </div>
  );
}

export default App;
