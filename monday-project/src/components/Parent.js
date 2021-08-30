import React, { useState } from 'react';
import Child from './Child';
import ChildComponent from './ChildComponent';
import './Parent.css';
import Counter from './Counter';

function Parent() {
  const [word, setWord] = useState('state')
  const [count, setCount] = useState(0)
  const [nameState, setNameState] = React.useState("Techtonica");



  return (
    <div className="parent">
      <h1>Parent</h1>
      <h2>Hello there, {nameState}!</h2>
      <ChildComponent onChange={setNameState} />


      <Child
        changeWord={word => setWord(word)} />
      <h2>{word}</h2>
      <Counter
        changeCount={() => setCount(count => count + 1)}
        changeCount2={() => setCount(count => count - 1)} />
      <h3>{count}</h3>



    </div>
  );
}

export default Parent;