import React, { Component } from 'react';
import './Resume.css';
import ResumeContent from './ResumeContent.js';

export class Resume extends Component {

  render() {
    return(

      <div className="body">

        <div className="body-2">
          
          <div className="row">
            <span className="txt-resume-title">RESUME</span>
            <hr />
          </div>

          <div className="row">
            <span className="txt-content-title">Experience</span>
          </div>

          <ResumeContent 
          title="Web Developer"
          subtitle="Poseidon IT Solutions - January 2022 to Present"
          subtitle_2=""
          />

          <ResumeContent 
          title="Line Leader"
          subtitle="CREOTEC Philippines Inc. - March 2018"
          subtitle_2=""
          />

          <div className="row"><br /></div>
          
          <div className="row">
            <span className="txt-content-title">Education</span>
          </div>

          <ResumeContent 
          title="Bachelor of Science in Information Technology"
          subtitle="University of Santo Tomas - A.Y. 2018 to 2022"
          subtitle_2=""
          />

          <ResumeContent 
          title="Senior High School"
          subtitle="De La Salle University - Dasmariñas - A.Y. 2016 to 2018"
          subtitle_2=""
          />

          <div className="row"><br /></div>
          
          <div className="row">
            <span className="txt-content-title">Certifications</span>
          </div>

          <ResumeContent 
          title="DevOps, Cloud, and Agile Foundations Specialization"
          subtitle="IBM - January 2022"
          subtitle_2="Credential ID: 4SBF9524YT7T"
          />

          <ResumeContent 
          title="Scrum Foundation Professional Certificate - SFPC™"
          subtitle="CertiProf - January 2022 to January 2024"
          subtitle_2="Credential ID: 72646641"
          />

          <ResumeContent 
          title="Remote Work and Virtual Collaboration Professional Certificate - RWVCPC"
          subtitle="CertiProf - January 2022 to January 2024"
          subtitle_2="Credential ID: 72599584"
          />

          <ResumeContent 
          title="ITPEC Fundamentals of IT Passport Exam (IP Exam, Level 1) Certified"
          subtitle="Philippine National I.T. Standards (PhilNITS) - October 2021"
          subtitle_2="Credential ID: IP01-0104"
          />

          <ResumeContent 
          title="Front-End Web UI Frameworks and Tools: Bootstrap 4"
          subtitle="Hong Kong University of Science and Technology - May 2021"
          subtitle_2="Credential ID: 9B3GH22CPYTV"
          />

          <ResumeContent 
          title="Google UX Design Specialization"
          subtitle="Google - May 2021"
          subtitle_2="Credential ID: R5CSH9B46QFZ"
          />
        </div>
      </div>
    )
  }

}

export default Resume;