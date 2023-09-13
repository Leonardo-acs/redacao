import React, { useState } from "react";
import RegisterFormUserAccountType from "./RegisterFormUserAccountType/RegisterFormUserAccountType";
import RegisterFormUserDetails from "./RegisterFormUserDetails/RegisterFormUserDetails";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Register() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        accountType: 'estudante',
        email: '',
        login: '',
        password: '',
        name: '',

    });

    const prevStep = () => {
        setStep(step - 1)
    }

    const nextStep = () => {
        setStep(step + 1)
    }

    function render() {
        switch (step) {
            case 1:
                return (
                    <RegisterFormUserAccountType
                        nextStep={nextStep}
                        setUserData={setUserData}
                        userData={userData}
                    />
                )
            case 2:
                return (
                    <RegisterFormUserDetails
                        nextStep={nextStep}
                        prevStep={prevStep}
                        setUserData={setUserData}
                        userData={userData}
                    />

                )

            default:
                <></>
        }
    }

    return (
        <div className="bg-white justify-center flex-col flex w-[420px] h-[500px] shadow-md rounded-md border-[1px] border-solid border-white">
            {render()}

            <div className='flex justify-end items-end m-10 gap-2'>
                {step === 1 ? <></> : <button onClick={prevStep} className='text-[#333] bg-white border-[1px] border-solid border-purple-500 rounded-md w-40 h-10 font-bold text-lg cursor-pointer'><FontAwesomeIcon icon={faArrowLeft} /> Voltar</button>}
                <button onClick={step === 2 ? () => console.log(userData) : nextStep} className='text-white bg-purple-500 border-[1px] border-solid border-purple-500 rounded-md w-40 h-10 font-bold text-lg cursor-pointer'>{step === 2 ? "Confirmar" : "Continuar"}</button>
            </div>
        </div>
    )

}