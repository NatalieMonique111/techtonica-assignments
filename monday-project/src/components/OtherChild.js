import React from "react";

const OtherChild = ({ onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="Update name" onChange={handleChange} />
    </div>
  );
};

export default OtherChild;