import React, { Component } from 'react';
import './Works.css';
import WorkContent from './WorkContent.js';

export class Works extends Component {

  render() {
    return(
      <div className="body">

        
        <div className="body-2">
          <div className="row">
            <span className="txt-work-title">Works</span>
            <hr />
          </div>

          <div className="row">
            <span className="txt-content-title">University Work</span>
          </div>

          <WorkContent 
          title="Agri-Talks"
          subtitle="Duration of Development: November 2021"
          subtitle_2="Role: Full Stack Developer"
          />
          <WorkContent 
          title="Agri-Shopping"
          subtitle="Duration of Development: July 2021 to November 2021"
          subtitle_2="Role: Full Stack Developer"
          />
          <WorkContent 
          title="iSITE Organization Tracker"
          subtitle="Duration of Development: August 2020 to May 2021"
          subtitle_2="Role: Front-end Developer and Quality Assurance Officer"
          />
        </div>
      </div>
    )
  }

}

export default Works;