import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar =()=> {
    return (
      <div className="Navbar">
        <Link to="/">Home</Link><span> |</span>
        <span> </span><Link to="/lists">Other Lists</Link>
      </div>
    )
  }

  export default Navbar