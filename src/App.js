import './App.css';
import { useState, useReducer } from 'react';


//
function App() {
  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    false
    );
  return (
    // check box
    <div className="App">
      <input type="checkbox" 
      value={checked} 
      onChange={setChecked}
      />

      <label>
        {checked ? "checked" : "not checked"}
      </label>
    </div>
  );
}

export default App;
