import React from "react";
import logo from "./logo.png"
import "./style.css"

function Logo() {
    return(
        <section className="secLogo">
        <img src={logo} alt="logo" className="logo"/>
      </section>
    )
}

export default Logo