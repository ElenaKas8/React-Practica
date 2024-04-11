
import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName });
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFirstName} value={firstName} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;