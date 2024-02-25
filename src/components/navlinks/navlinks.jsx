import React from "react"
import { Link } from "react-router-dom"

function Navlinks(props){
    return(
        <ul className="nav-elements">
                <li onClick={props.close}><Link to="/" ><button className="headerBtn">HOME</button></Link></li>
                <li onClick={props.close}><Link to="/about"><button className="headerBtn">ABOUT</button></Link></li>
        </ul>
    )
}

export default Navlinks