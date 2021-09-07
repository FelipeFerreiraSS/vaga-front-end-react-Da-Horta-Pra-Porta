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
          <h1>Login</h1>
          <form>
            <input placeholder="CPF"></input>
            <input placeholder="Senha"></input>
            <button className="entrar">Entrar</button>
            Esqueceu a senha?
            <span></span>
            <button className="cadastrar">Cadastrar</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;