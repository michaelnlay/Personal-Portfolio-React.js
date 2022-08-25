// import React from 'react'
import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";

//we take the menuOpen and setMenuOpen as props from the root App.jsx file
export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    // if menuOpen (meaning if menuOpen is true), then add active 
    <div className={"topbar " + (menuOpen && "active")} >
     
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MICHAEL LAY
          </a>
          <div className="itemContainer">
            <Person className="icons" />
            <span>+1 (804) 475-7889</span>
          </div>
          <div className="itemContainer">
            <Email className="icons" />
            <span>michaellay2689@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
