import React, { useState } from "react";
import './Register.scss'
import RegisterFormUserAccountType from "./RegisterFormUserAccountType/RegisterFormUserAccountType";
import RegisterFormUserDetails from "./RegisterFormUserDetails/RegisterFormUserDetails";

export default function Register() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        accountType: '',
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
                (console.log('This is a multi-step form built with React.'))
        }
    }

    return (
        <div className="teste">
            {render()
            }
        </div>
    )

}