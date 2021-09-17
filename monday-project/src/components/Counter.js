import React, { useState } from 'react';

function Counter(props) {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => props.changeCount()}>+1</button>
      <button onClick={() => props.changeCount2()}>-1</button>

    </div>
  )
}

export default Counter;