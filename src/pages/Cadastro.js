import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

import { Main, Input, SectionFormulario, Titulo, Form, ButtonEntrar, ButtonCadastrar, Span } from '../style'

function Cadastro(){
    return(
        <Main>
            <Logo/>
            <SectionFormulario>
                <div className="formulario">
                    <Titulo>Cadastrar</Titulo>
                    <Form>
                        <Input placeholder="Nome" type="text"></Input>
                        <Input placeholder="CPF" type="number"></Input>
                        <Input placeholder="Data de nascimento" type="date"></Input>
                        <Input placeholder="Senha" type="password"></Input>
                        <ButtonEntrar>Cadastrar</ButtonEntrar>
                        <Link className="link" to="/RedefinirSenha">Redefinir senha</Link>
                        <Span></Span>
                        <Link className="link" to="/"><ButtonCadastrar>Fazer login</ButtonCadastrar></Link>
                        
                    </Form>
                </div>
            </SectionFormulario>
        </Main>
    )
}

export default Cadastro