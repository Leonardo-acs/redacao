
import './RegisterFormUserDetails.scss'

export default function RegisterFormUserDetails({
    nextStep,
    prevStep,
    setUserData,
    userData,
}) {

    console.log(userData)

    return (
        <div className="Form_UserDetails">
            <h1>Dados Pessoais</h1>
            <input type='text' placeholder='Nome completo'></input>
            <input type='email' placeholder='email'></input>
            <input type='text' placeholder='login'></input>
            <input type='password' placeholder='senha'></input>

            <div className='Form_UserDetails_NavButtons'>
                <button onClick={prevStep} className='GoBack_Button'>Voltar</button>
                <button onClick={nextStep} className='Next_Button'>Continue</button>
            </div>
        </div>
    )
}