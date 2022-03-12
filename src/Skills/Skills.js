import React, { Component } from 'react';
import './Skills.css';
import SkillsContent from './SkillsContent.js';

export class Skills extends Component {

  render() {
    return(
      <div className="body">

        
        <div className="body-2">

          <div className="row">
            <span className="txt-resume-title">Skills</span>
            <hr />
          </div>

          <div className="row">
            <span className="txt-content-title">Framework</span>
          </div>

          <SkillsContent 
          title="React"
          rate="4"
          />

          <SkillsContent 
          title="Angular"
          rate="4"
          />

          <SkillsContent 
          title="Laravel"
          rate="3"
          />

          <SkillsContent 
          title="Ruby on Rails"
          rate="3"
          />

        <SkillsContent 
          title="Ionic"
          rate="2"
          />
          <div className="row">
            <br />
          </div>

          <div className="row">
            <span className="txt-content-title">Programming Languages</span>
          </div>

          <SkillsContent 
          title="JavaScript"
          rate="4"
          />

          <SkillsContent 
          title="TypeScript"
          rate="4"
          />

          <SkillsContent 
          title="Java"
          rate="3"
          />

          <SkillsContent 
          title="Python"
          rate="4"
          />

          <SkillsContent 
          title="PHP"
          rate="4"
          />

          <div className="row">
            <br />
          </div>

          <div className="row">
            <span className="txt-content-title">Database</span>
          </div>

          <SkillsContent 
          title="MySQL"
          rate="3"
          />

          <SkillsContent 
          title="NoSQL"
          rate="3"
          />
          

       

          


        </div>




      </div>
    )
  }

}

export default Skills;