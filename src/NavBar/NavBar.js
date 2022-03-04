import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './NavBar.css';
import Home from './../Home/Home.js';
import Resume from './../Resume/Resume.js';

import Skills from './../Skills/Skills.js';
import Works from '../Works/Works.js';

import Profile from './../Profile/Profile.js';
export class NavBar extends Component {

  render() {
    return(
    <Router>
      <div className="body-container">
      <div className="row">
        <div className="col-2">
          <div className="row">
          <Link to="/">
            <button type="button" class="btn btn-dark btn-nav"><span className="btn-nav-txt">HOME</span></button>
          </Link>
            </div>
          <div className="row">
            <Link to="/resume">
              <button type="button" class="btn btn-dark btn-nav"><span className="btn-nav-txt">RESUME</span></button>
            </Link>
          </div>

          <div className="row">
            <Link to="/skills">
              <button type="button" class="btn btn-dark btn-nav"><span className="btn-nav-txt">SKILLS</span></button>
            </Link>
          </div>

          <div className="row">
            <Link to="/Works">
              <button type="button" class="btn btn-dark btn-nav"><span className="btn-nav-txt">WORKS</span></button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="row container-profile">
            <Profile />
          </div>
        </div>
        <div className="col">
          <div className="row container-profile">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="/skills" element={<Skills/>} />
              <Route path="/Works" element={<Works/>} />
            </Routes>
          </div>
        </div>
      </div>
      </div>
    </Router>
    )
  }

}

export default NavBar;