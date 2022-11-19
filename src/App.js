import { useState } from 'react';
import './App.css';

// Custom Hook
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return [
    {
      value, 
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#0000");


  // submit
  const submit = (e) => {
  e.preventDefault(); // Avoid default behavior
  // print the title with her color 
  alert(`${titleProps.value}, ${colorProps.value}`);
  // After clicking ADD
  resetTitle("");
  resetColor("");
  };

  return (
    <form onSubmit={submit}>

      <input
        {...titleProps}
     
        type="text"
        placeholder="color title..."
      />

      <input 
      {...colorProps}
      type="color" />

      <button>ADD</button>
    </form>
  );
}

export default App;
