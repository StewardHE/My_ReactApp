import { useState, useEffect } from 'react';
import './App.css';

// Fetch data from Github User API
function GithubUser({ followers_url, events_url }) {
  return(
    <div>
      <h1>{ followers_url }</h1>
      <p>{ events_url }</p>
    </div>
  );
}

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
  // shows the followers data in the API
    return (
      <GithubUser 
      // shows the followers on the API
      followers_url={data.followers_url} 
      // shows the events on the api
      events_url={data.events_url}
      />
      
    )
  return <h1>Data</h1>;
}

export default App;
