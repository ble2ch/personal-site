import React from "react";
import './WorkContent.css';

export default function WorkContent(props) {
    return (
    <div className="row content-container">
        <div className="col">
            <div className="row">
                <span className="txt-title">{props.title}</span>
            </div>
            <div className="row">
                <span className="txt-subtitle">{props.subtitle}</span>
            </div>
            <div className="row">
                <span className="txt-subtitle">{props.subtitle_2}</span>
            </div>
        </div>
    </div>
    );
}