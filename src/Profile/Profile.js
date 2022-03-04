import React, { Component } from 'react';
import './Profile.css';

export class Profile extends Component {

  render() {
    return(

      <div className="body">
          <div className="body-2">
            <div className="row">
                <div className="profile-pic"></div>
            </div>
            <div class="row"><br /></div>
            <div className="row"><span className="txt-name">Raymark Ramos</span></div>
            <div className="row"><span className="txt-subtitle-work">Web and Mobile Developer</span></div>
            <div className="row"><span className="txt-email">Email Address: raymark.ramos12@gmail.com</span></div>
        </div>
      </div>
      
    )
  }

}

export default Profile;