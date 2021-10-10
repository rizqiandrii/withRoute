import React from 'react'
import Logo from '../asset/logo.png'
import Home from '../pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
    return (
        <Router>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#"><img src={Logo}></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav container-fluid d-flex justify-content-end">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Cari Kerja</a>
                            <a class="nav-link" href="#">Cari Magangs</a>
                            <a class="nav-link" href="#">
                                <div class="dropdown">
                                    <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Notifikasi
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Umum</a></li>
                                        <li><a class="dropdown-item" href="#">Hasil</a></li>
                                    </ul>
                                </div>
                            </a>
                            <Link to="/SignUp"><button type="button" class="btn btn-outline-primary rounded-pill">Sig up</button></Link> 
                            <Link to="/Login"><button type="button" class="btn btn-outline-primary rounded-pill ms-1">Login</button></Link>                        
                           
                        </div>
                        <Switch>
                           <Route path="/SignUp">
                            <Home />
                          </Route>
                        </Switch>
                    </div>
                </div>
            </nav>
        </Router>
    )
}

export default Navbar
