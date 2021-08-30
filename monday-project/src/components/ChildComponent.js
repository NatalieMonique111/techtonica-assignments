import React from "react";

const ChildComponent = ({ onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Update name" onChange={handleChange} />
    </div>
  );
};

export default ChildComponent;