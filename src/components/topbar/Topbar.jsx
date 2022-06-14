// import React from 'react'
import "./topbar.scss";
// import {Person, Email} from "@material-ui"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MICHAEL LAY
          </a>
          <div className="itemContainer">
            {/* <Person />
            <span>89714</span> */}


          </div>
        </div>

        <div className="right">Right side</div>
      </div>
    </div>
  );
}
