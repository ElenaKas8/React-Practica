import React, { useState } from "react";

export default function About({ firstName, lastName, age }) {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>Hi, my name is {firstName} {lastName} and I am {age} years old.</p>

      <div>
        <p>{number}</p>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
}

