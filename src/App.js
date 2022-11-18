import './App.css';
import { useState, useEffect } from 'react';


//
function App() {
  const [emotion, setEmotion] = useState("(Choose one)"); // value of emotion is "choose one"
  const [secondary, setSecondary] =
    useState("(Choose One Option)");

  // set the current emotion on the console using useEffect
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  // Change the current state of the app using buttons 
  return (
    <div className="App">
      <hr/>
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
       <hr/>
          <h1>Current Secondary Emotion is {secondary}. </h1>

        <button onClick={() => setSecondary("grateful")}>Grateful</button>
        <hr/>
    </div>
  );
}

export default App;
