import "./Contact.css"
import { useLocation } from "react-router"
import { Link } from "react-router-dom";

export default function Contact() {
    const location =useLocation();
    console.log(location.state.txt)
    return(
        <div className="Contact">
             <h1> section contact</h1>
            
        </div>
    )
}