import { useRef, useState } from "react";
import "./App.css";

function App() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
    });
    setFullName({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
    });
    firstName.current.value = "";
    lastName.current.value = "";
  };

  return (
    <div>
      <form className="Form" onSubmit={handleSubmit}>
        <input type="text" ref={firstName} />
        <input type="text" ref={lastName} />
        <input type="submit" />
        {fullName.firstName} {fullName.lastName}
      </form>
    </div>
  );
}

export default App;