import { useState, useEffect } from 'react';
import './App.css';

// query
const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

// options to the query
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

// Fetch data from lift API
function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}


// this component is to fetch data from the github Api
function App() {
  // Here we use useState
  const [data, setData] = useState(null);

  // this is for add a loading state before show the data and a error state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // this is for fetch the data from the api
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com/`,
      opts
      )
      
      //
      .then((response => response.json()))
      .then(setData)
      // set loading false
      .then(() => setLoading(false))
      // catch the error
      .catch(setError);
  }, []);
  // if loading is true
  if (loading) return <h1>Loading</h1>
  // if there's a error show it (json format)
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  // if there's no data say null
  if (!data) return null;
  // send the date to the console
  console.log(data, "DATA!!");

  // if there are some data, Show it
  if(data) 
  // Shows al the lifts from the API 
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default App;