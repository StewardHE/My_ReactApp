import './App.css';
import { useRef } from 'react';



function App() {
  
  //
  const txtTitle = useRef();
  const hexColor = useRef();

  // submit
  const submit = (e) => {
  e.preventDefault(); // Avoid default behavior
  const title = txtTitle.current.value;
  const color = hexColor.current.value;
  // print the title with her color 
  alert(`${title}, ${color}`);
  // After clicking ADD
  txtTitle.current.value = "";
  hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={txtTitle}
        type="text"
        placeholder="color title..."
      />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
