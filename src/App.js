import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

// dummy data
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
  const [text, setText] = useState('');

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = list.concat({ task: text, id: 3 });
    setList(newList);

    setText('');
  }

  return (
    <div className="App">
      <h1>to do list</h1>
      <Input onHandleText={handleText} onHandleSubmit={handleSubmit} text={text}/>
      <List list={list}/>
      {console.log(list)}
    </div>
  );
}

export default App;
