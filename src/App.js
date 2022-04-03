import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import "./styles/common.css";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Link to='/cart'>Cart</Link>
      {" || "}
      <Link to='/login'>Login</Link>
      {" || "}
      <Link to='/signup'>signup</Link>
      {" || "}
      <Link to='/wishlist'>wishlist</Link>
      {" || "}
      <Link to='/listing'>listing</Link>
      {" || "}
      <Link to='/home'>home</Link>
    </div>
  );
}

export default App;
