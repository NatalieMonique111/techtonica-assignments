import React, { useState } from 'react';
import './Child.css';

function Child(props) {

  return (
    <div className="child">
      <h2>Impermanence</h2>
      <button onClick={() => props.changeWord(' changed state!')}>
        Click Me!</button>

    </div>
  );
}

export default Child;