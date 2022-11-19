import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#0000");


  // submit
  const submit = (e) => {
  e.preventDefault(); // Avoid default behavior
  // print the title with her color 
  alert(`${title}, ${color}`);
  // After clicking ADD
  setTitle("");
  setColor("");
  };

  return (
    <form onSubmit={submit}>

      <input
      value={title}
      onChange={(event) => 
        setTitle(event.target.value)
        }
        type="text"
        placeholder="color title..."
      />

      <input 
      value={color} 
      onChange={(event) => {
        setColor(event.target.value)
      }}
      type="color" />

      <button>ADD</button>
    </form>
  );
}

export default App;
