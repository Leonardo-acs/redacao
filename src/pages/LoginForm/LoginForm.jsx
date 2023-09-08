import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/login_form_logo.png'
import { Link } from 'react-router-dom';

export default function LoginForm() {

    return (
        <div className='flex bg-white justify-between w-[800px] h-[400px] rounded-xl max-w-screen-lg shadow-2xl'>
            <div className='flex flex-col m-7 w-full h-full'>
                <h1 className='text-3xl font-bold text-[#333]'>Seja bem vindo(a) novamente</h1>
                <div className='flex my-10 gap-4 mb-10 flex-col justify-center'>
                    <input placeholder={'digite seu usuário'} className={"mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-purple-500 block w-[370px] rounded-md sm:text-sm focus:ring-1"}></input>
                    <input type="password" placeholder={'digite sua senha'} className={"mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-purple-500 block w-[370px] rounded-md sm:text-sm focus:ring-1"} ></input>
                </div>
                <div className='flex gap-4 items-center w-full'>
                    <button className='flex justify-center items-center h-10 px-6 w-36 py-6 text-[#333] font-semibold bg-purple-500 border-purple-500 border-[1px] rounded-md hover:bg-purple-500 focus:outline-none'>ACESSAR</button>
                    <button className='flex justify-center items-center h-10 px-6 w-36 py-6 text-[#333] font-semibold bg-purple-500 border-purple-500 border-[1px] rounded-md hover:bg-purple-500 focus:outline-none'>
                        <Link to={'/autoregister'}>Criar Conta</Link>
                    </button>
                </div>
            </div>
            <div className='flex items-center w-full m-7'>
                <img src={logo} alt='Logo'></img>
            </div>
        </div >
    )
}