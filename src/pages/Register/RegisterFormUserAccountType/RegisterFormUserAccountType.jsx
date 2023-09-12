// import './RegisterFormUserAccountType.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenRuler, faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function RegisterFormUserAccountType({ nextStep, setUserData, userData }) {
    const [selectedType, setSelectedType] = useState('estudante');

    const corretorSelected = selectedType === "corretor" ? true : false
    const estudanteSelected = selectedType === "estudante" ? true : false

    const handleTypeSelection = (type) => {
        setSelectedType(type);
        setUserData({ ...userData, accountType: type })
    }

    return (
        <div className="flex flex-col items-center w-full h-full p-10">
            <h1 className='text-4xl font-black text-purple-600'>Tipo de conta</h1>
            <div className='flex w-full justify-between'>
                <button className={`flex justify-center items-center flex-col my-10 gap-3 border-solid border-[1px] border-purple-100 rounded-md h-[140px] w-[160px] ${selectedType === "estudante" ? " bg-purple-300" : "bg-white"} hover:bg-purple-300`} onClick={() => handleTypeSelection('estudante')}>
                    <FontAwesomeIcon icon={faPenRuler} size="2xl" className='text-[#333]'/>
                    <span className='text-[#333] font-semibold'>Sou estudante</span>
                </button>
                <button className={`flex justify-center items-center flex-col my-10 gap-3 border-solid border-[1px] border-purple-300 rounded-md h-[140px] w-[160px] ${selectedType === "corretor" ? " bg-purple-300" : "bg-white"} hover:bg-purple-300`} onClick={() => handleTypeSelection('corretor')}>
                    <FontAwesomeIcon icon={faChalkboardUser} size="2xl" className='text-red-600]'/>
                    <span className={`font-semibold text-[#333] `}> Sou corretor(a)</span>
                </button>
            </div>
            <div className='flex items-center justify-center bg-purple-500 border-purple-500 border-[1px] w-64 h-10 rounded-md'>
                <button onClick={nextStep} className='text-white font-bold text-lg cursor-pointer w-full'>Continuar</button>
            </div>
        </div>
    )
}