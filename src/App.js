import './App.css';

// data
const tahoe_peaks = [
  { name: "Freel", elevation: 10929 },
  { name: "Monument", elevation: 12902},
  { name: "pyramid", elevation: 345677},
  { name: "Tallac",  elevation: 73821}
];

// if we have data, show it, else, print empty
function List({data, renderItem, renderEmpty}) {
  return !data.length ? renderEmpty : <ul>{data.map((item) => (
    <li key={item.name}>
      {renderItem(item)}
    </li>
  ))}</ul>
}

function App() {
 return (
  // render the list
  <div>
    <List 
      data={tahoe_peaks} 
      renderEmpty={<p>This is empty</p>} 
      renderItem={item => (
        <>
        {item.name} - {item.elevation} ft.
        </>
  )}
    />
  </div>
 );
}

export default App;