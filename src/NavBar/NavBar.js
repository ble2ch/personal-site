import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './NavBar.css';
import Home from './../Home/Home.js';
import Certification from './../Certification/Certification.js';

export class NavBar extends Component {

  render() {
    return(
    <Router>
        <div>Navbar checking</div>
        <Link to="/">Home</Link>
        <Link to="/Certification">Certification</Link>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Certification" element={<Certification/>} />
        </Routes>

        <div className="row">
            <div className="col-2">
                1
            </div>
            <div className="col">
                2
            </div>
        </div>
    </Router>
    )
  }

}

export default NavBar;