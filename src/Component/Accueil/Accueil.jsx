import { Link } from "react-router-dom"
import "./Accueil.css"

export default function Accueil(){
    return(
        <div className="Accueil">
            <h1> Bienvenu Accueil</h1>
            <Link
             to={{
                 pathname:"/Contact",
                 state:{
                     txt:"voila des donnée"
                 }
             }}
             >Aller à la section Contact</Link>
        </div>
    )
}