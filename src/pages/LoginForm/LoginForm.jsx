import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/login_form_logo.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {
    const [login, setLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useNavigate();
    const handleLogin = () => {
        try {
            axios.post(`http://127.0.0.1:8000/api/login?email=${login}&password=${userPassword}`)
                .then((response) => {
                    history('/main')
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };


    return (
        <div className='flex bg-white justify-between w-[800px] h-[400px] rounded-xl max-w-screen-lg shadow-2xl'>
            <form className='flex flex-col m-7 w-full h-full'>
                <h1 className='text-3xl font-bold text-[#333]'>Seja bem vindo(a)</h1>
                <div className='flex my-10 gap-4 mb-10 flex-col justify-center'>
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                            required
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            class="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Login
                        </label>
                    </div>
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                            required
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            type='password'
                            class="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Senha
                        </label>
                    </div>
                </div>

                <div className='flex gap-4 items-center'>
                    <button
                        onClick={handleLogin}
                        disabled={!userPassword && !login}
                        className={`flex justify-center items-center uppercase w-40 h-10 px-6 py-6 font-semibold border-[1px] rounded-md focus:outline-none
                                  ${userPassword && login ? 'bg-purple-400 border-purple-400 text-[#333]' : 'bg-gray-200 border-gray-200 text-gray-600 cursor-not-allowed'}`}
                    >
                        ACESSAR
                    </button>
                    <button className='flex justify-center items-center uppercase h-10 px-6 w-40 py-6 text-[#333] font-semibold bg-white border-purple-400 border-[1px] rounded-md hover:bg-purple-400 focus:outline-none'>
                        <Link to={'/autoregister'}>Criar Conta</Link>
                    </button>
                </div>
            </form>
            <div className='flex items-center m-7'>
                <img src={logo} alt='Logo'></img>
            </div>
        </div >
    )
}