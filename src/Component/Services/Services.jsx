import "./Services.css"
import { useParams } from "react-router";

export default function Projet(){

    const {slug} =useParams();
    console.log(slug);

    return(
        <div className="Services">
            <h1>{slug}</h1>
         <h1> section projet</h1>

        </div>
    )
}
