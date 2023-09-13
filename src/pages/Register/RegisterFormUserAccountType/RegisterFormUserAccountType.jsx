// import './RegisterFormUserAccountType.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenRuler, faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
export default function RegisterFormUserAccountType({ nextStep, setUserData, userData }) {
    const [accountType, setAccountType] = useState(userData.accountType);
  
    const handleTypeSelection = (type) => {
        setAccountType(type || accountType);
        setUserData({ ...userData, accountType: type || accountType })
    }

    return (
        <div className="flex flex-col items-center w-full h-full p-10">
            <h1 className='text-4xl font-black text-purple-600'>Tipo de conta</h1>
            <div className='flex w-full justify-between'>
                <button className={`flex justify-center items-center flex-col my-10 gap-3 border-solid border-[1px] border-purple-100 rounded-md h-[140px] w-[160px] ${accountType === "estudante" ? " bg-purple-300" : "bg-white"} hover:bg-purple-300`} onClick={() => handleTypeSelection('estudante')}>
                    <FontAwesomeIcon icon={faPenRuler} size="2xl" className='text-[#333]' />
                    <span className='text-[#333] font-semibold'>Sou estudante</span>
                </button>
                <button className={`flex justify-center items-center flex-col my-10 gap-3 border-solid border-[1px] border-purple-300 rounded-md h-[140px] w-[160px] ${accountType === "corretor" ? " bg-purple-300" : "bg-white"} hover:bg-purple-300`} onClick={() => handleTypeSelection('corretor')}>
                    <FontAwesomeIcon icon={faChalkboardUser} size="2xl" className='text-red-600]' />
                    <span className={`font-semibold text-[#333] `}> Sou corretor(a)</span>
                </button>
            </div>
        </div>
    )
}