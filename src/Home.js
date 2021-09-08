import React from "react";
import { Link } from "react-router-dom";
import Logo from "./components/Logo";

import { Main, Input, SectionFormulario, Titulo, Form, ButtonEntrar, ButtonCadastrar, Span } from './style'

function Home() {
  return (
    <Main>
      <Logo/>
      <SectionFormulario>
        <div className="formulario">
          <Titulo>Login</Titulo>
          <Form>
            <Input placeholder="CPF"></Input>
            <Input placeholder="Senha"></Input>
            <ButtonEntrar>Entrar</ButtonEntrar>
            <Link to="/RedefinirSenha">RedefinirSenha</Link>
            <Span></Span>
            <ButtonCadastrar>Cadastrar</ButtonCadastrar>
          </Form>
        </div>
      </SectionFormulario>
    </Main>
  );
}

export default Home;