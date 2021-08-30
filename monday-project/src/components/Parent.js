import React, { useState } from 'react';
import Child from './Child';
import './Parent.css';
import Counter from './Counter';

function Parent() {
  const [word, setWord] = useState('state')
  const [count, setCount] = useState(0)


  return (
    <div className="parent">
      <h1>Parent</h1>
      <h2>{word}</h2>
      <h3>{count}</h3>
      <Child
        changeWord={word => setWord(word)} />
      <Counter
        changeCount={() => setCount(count => count + 1)}
        changeCount2={() => setCount(count => count - 1)} />

    </div>
  );
}

export default Parent;