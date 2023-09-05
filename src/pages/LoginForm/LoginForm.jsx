import './LoginForm.scss';
import React, { useState } from 'react';
import logo from '../../assets/images/login_form_logo.png'
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const [userType, setUserType] = useState("estudante")
    return (
        <div className='LoginForm'>
            <div className='LoginForm_Container_Form'>
                <h1>Seja bem vindo(a) novamente</h1>
                <div className='LoginForm_Container_Form_Header'>
                    <button className={`LoginForm_Container__button ${userType === "corretor" ? "selected" : ""}`} onClick={() => setUserType("corretor")}>SOU CORRETOR</button>
                    <button className={`LoginForm_Container__button ${userType === "estudante" ? "selected" : ""}`} onClick={() => setUserType("estudante")}>SOU ESTUDANTE</button>
                </div>
                <div className='LoginForm_Container_Form_Body'>
                    <input placeholder={' digite seu usuário'}></input>
                    <input placeholder={'digite sua senha'} ></input>
                </div>
                <div className='LoginForm_Container_Form_Remider'>
                    <a >Esqueceu a senha ?</a>
                    <a >Remember me</a>
                </div>
                <div className='LoginForm_Container_Form_Footer'>
                    <button type='submit' className='Button__Access'>Acessar</button>
                    <Link className='Button__Create_Account' to={'/autoregister'}>Criar Conta</Link>
                </div>
            </div>
            <div className='LoginForm_Container_Image'>
                <img src={logo} alt='Logo'></img>
            </div>
        </div >
    )
}