import './App.css';
import { useState } from 'react';

//
function App() {
  const [emotion, setEmotion] = useState("(Choose one)");

  return (
    <div className="App">

        <h1>
          The current state of the app is {emotion}
        </h1>
        
        <button onClick={() => setEmotion("Sad")  }>
          Sad
        </button>
        <button onClick={() => setEmotion("Happy") }>
          Happy
        </button> 
        <button onClick={() => setEmotion("Excited") }>
          Excited
        </button>
        <button onClick={() => setEmotion("Off") }>
          Off
          </button>


    </div>
  );
}

export default App;
