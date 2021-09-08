import React from "react";
import { Link } from "react-router-dom";
import Logo from "./components/Logo";

import { Main, Input, SectionFormulario, Titulo, Form, ButtonEntrar, ButtonCadastrar, Span } from './style'


function Cadastro(){
    return(
        <Main>
            <Logo/>
            <SectionFormulario>
                <div className="formulario">
                    <Titulo>Redefinir senha</Titulo>
                    <Form>
                        <Input placeholder="CPF"></Input>
                        <Input placeholder="Data de nascimento"></Input>
                        <ButtonEntrar>Redefinir senha</ButtonEntrar>
                        <Link className="link" to="/RedefinirSenha">Cadastrar</Link>
                        <Span></Span>
                        <Link className="link" to="/"><ButtonCadastrar>Fazer login</ButtonCadastrar></Link>
                        
                    </Form>
                </div>
            </SectionFormulario>
        </Main>
    )
}

export default Cadastro