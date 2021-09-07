import React from "react";
import logo from "./images/logo.png"
import './App.css';

function App() {
  return (
    <main>
      <section className="secLogo">
        <img src={logo} alt="logo" className="logo"/>
      </section>
      <section className="secFormulario">
        <div className="formulario">

        </div>
      </section>
    </main>
  );
}

export default App;