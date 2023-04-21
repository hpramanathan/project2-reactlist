import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar =()=> {
    return (
      <div className="Navbar">
        <Link to="/" className="Navbar-link">HOME</Link><span>&nbsp;&nbsp; ~ &nbsp;</span>
        <span> </span><Link to="/lists" className="Navbar-link">LISTS</Link>
      </div>
    )
  }

  export default Navbar