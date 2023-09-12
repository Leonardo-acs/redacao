
// import './RegisterFormUserDetails.scss'

export default function RegisterFormUserDetails({
    nextStep,
    prevStep,
    setUserData,
    userData,
}) {
    return (
        <div className="flex flex-col items-center p-10">
            <h1 className='text-4xl font-black text-purple-600'>Dados Pessoais</h1>
            <div className="flex flex-col w-full p-10">
                <input type='text' placeholder='Nome completo' className=" border-[1px] border-gray-400 rounded-[4px]"></input>
                <input type='email' placeholder='email'></input>
                <input type='text' placeholder='login'></input>
                <input type='password' placeholder='senha'></input>
            </div>


            <div className='flex items-center justify-center bg-purple-500 border-purple-500 border-[1px] w-64 h-10 rounded-md'>
                <button onClick={prevStep} className='GoBack_Button'>Voltar</button>
                <button onClick={nextStep} className='text-white font-bold text-lg cursor-pointer w-full'>Continuar</button>
            </div>
        </div>
    )
}