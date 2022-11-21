import { useState, useEffect } from 'react';
import './App.css';


// this component is to fetch data from the github Api
function App() {
  // Here we use useState
  const [data, setData] = useState(null);
  // this is for fetch the data from the api
  useEffect(() => {
    fetch(
      `https://api.github.com/`
      )
      
      .then((response => response.json()))
      .then(setData);
  }, []);
  // if there are some data, Show it
  if(data) 
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    );

  return <h1>Data</h1>
}

export default App;
