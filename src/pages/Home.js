import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

import { Main, Input, SectionFormulario, Titulo, Form, ButtonEntrar, ButtonCadastrar, Span } from '../style'

function Home() {
  return (
    <Main>
      <Logo/>
      <SectionFormulario>
        <div className="formulario">
          <Titulo>Login</Titulo>
          <Form>
            <Input placeholder="CPF" type="number"></Input>
            <Input placeholder="Senha" type="password"></Input>
            <ButtonEntrar>Entrar</ButtonEntrar>
            <Link  className="link" to="/RedefinirSenha">Esqueceu a senha?</Link>
            <Span></Span>
            <Link className="link" to="/Cadastro"><ButtonCadastrar>Cadastrar</ButtonCadastrar></Link>
            
          </Form>
        </div>
      </SectionFormulario>
    </Main>
  );
}

export default Home;