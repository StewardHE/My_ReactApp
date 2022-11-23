import './App.css';

// Home component and page using reactRouter.
function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>
  );
}

// About component and page using reactROuter
export function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}
// Contact component and page using reactROuter
export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
 return <Home />;
}



