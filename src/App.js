import Navbar from "./Component/Navbar/Navbar";
import Contact from "./Component/Contact/Contact";
import Accueil from "./Component/Accueil/Accueil";
import Services from "./Component/Services/Services";
import Erreur404 from "./Component/Erreur404/Erreur404";

import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'

function App() {
  return (
   <>
   <Router>
     <Navbar/>
     <Switch>
     <Route exact path="/"  component={Accueil}/>
     <Route exact path="/Services/:slug"  component={Services}/>
     <Route exact path="/Contact"  component={Contact}/>
     <Route  path="/"  component={Erreur404}/>

     </Switch>

   </Router>
   </>
  );
}

export default App;
