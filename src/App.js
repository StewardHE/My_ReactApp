import "./App.css";
import { Link, Outlet } from "react-router-dom";


// Home component and page using reactRouter.
function Home() {
  return (
    <div>
      <nav>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

// About component and page using reactROuter
export function About() {
  return (
    
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
}

// 
export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}



// Contact component and page using reactROuter
export function Contact() {
  return (
    <div>
        <nav>
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
 return <Home />;
}



