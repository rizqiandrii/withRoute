import react from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Profil from './pages/Profil'
import News from './pages/News'
import Hasil from './pages/Hasil'
import Umum from './pages/Umum';
import Apply from './pages/Apply'
import Home from './pages/Home';
import Page from './pages/Page';
import Cv from './pages/Cv'
import Sidebar from './components/Sidebar'
import Perusahaan from './pages/Perusahaan';
import Navbarafter from './components/Navbarafter';


function App() {
  return (
    
    <Router>
      <div>
        <Navbarafter />
      </div>
      <Switch>
      <Route path="/Perusahaan" >
          <Perusahaan />
        </Route>
      <Route path="/sidebar" >
          <Sidebar />
        </Route>
      <Route path="/Home" >
          <Home />
        </Route>
      <Route path="/Umum" >
          <Umum />
        </Route>
      <Route path="/news" >
          <News/>
        </Route>
      <Route path="/apply" >
          <Apply />
        </Route>
      <Route path="/Hasil" >
          <Hasil />
        </Route>
      <Route path="/Profil" >
          <Profil />
        </Route>
        <Route path="/cv" >
          <Cv />
        </Route>
        <Route path="/" >
          <Page />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
