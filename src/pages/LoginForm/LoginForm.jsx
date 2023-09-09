import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/login_form_logo.png'
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const [login, setLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/login?email=${login}&password=${userPassword}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, userPassword }),
            });

            if (response.ok) {
                // O usuário foi autenticado com sucesso
                alert('Login bem-sucedido!');
            } else {
                // Tratar erros aqui
                alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };
    
    return (
        <div className='flex bg-white justify-between w-[800px] h-[400px] rounded-xl max-w-screen-lg shadow-2xl'>
            <div className='flex flex-col m-7 w-full h-full'>
                <h1 className='text-3xl font-bold text-[#333]'>Seja bem vindo(a)</h1>
                <div className='flex my-10 gap-4 mb-10 flex-col justify-center'>
                    <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder={'digite seu login'} className={"mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-purple-400 block w-[370px] rounded-md sm:text-sm focus:ring-1"}></input>
                    <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder={'digite sua senha'} className={"mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-purple-500 block w-[370px] rounded-md sm:text-sm focus:ring-1"} ></input>
                </div>
                <div className='flex gap-4 items-center'>
                    <button onClick={handleLogin} className='flex justify-center items-center uppercase w-40 h-10 px-6 py-6 text-[#333] font-semibold bg-purple-400 border-purple-400 border-[1px] rounded-md hover:bg-purple-400 focus:outline-none'>ACESSAR</button>
                    <button className='flex justify-center items-center uppercase h-10 px-6 w-40 py-6 text-[#333] font-semibold bg-white border-purple-400 border-[1px] rounded-md hover:bg-purple-400 focus:outline-none'>
                        <Link to={'/autoregister'}>Criar Conta</Link>
                    </button>
                </div>
            </div>
            <div className='flex items-center m-7'>
                <img src={logo} alt='Logo'></img>
            </div>
        </div >
    )
}