import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <Link to="/"><h2>Home</h2></Link>
      <Link to="/about"><h2>About</h2></Link>
      <Link to="/projects"><h2>Projects</h2></Link>

    </>
  )
}

export default Navbar;
