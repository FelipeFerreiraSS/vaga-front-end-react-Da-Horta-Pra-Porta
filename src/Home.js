import React from "react";
import Logo from "./components/Logo";

import './index';

function Home() {
  return (
    <main>
      <Logo/>
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

export default Home;