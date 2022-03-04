import React from "react";
import './SkillsContent.css';

export default function SkillsContent(props) {
    return (
        <div className="row content-container">
        <div className="col">
          <div className="row">
            <span className="txt-title">{props.title}</span>
          </div>
          <div className="row">
            {props.rate === "1" ? 
              <div>
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
              </div>
            : null}
            {props.rate === "2" ? 
              <div>
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
              </div>
            : null}
            {props.rate === "3" ? 
              <div>
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/>  
              </div>
            : null}
            {props.rate === "4" ? 
              <div>
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_outline_black_48dp.svg" alt="logo"/> 
              </div>
            : null}
            {props.rate === "5" ? 
              <div>
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
                <img className="logo-skill" src="../../../star_rate_black_48dp.svg" alt="logo"/> 
              </div>
            : null}
        
         
          </div>
        </div>
      </div>
    );
}