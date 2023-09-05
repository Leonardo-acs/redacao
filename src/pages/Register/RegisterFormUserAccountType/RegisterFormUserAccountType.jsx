
import './RegisterFormUserAccountType.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenRuler, faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function RegisterFormUserAccountType({nextStep, setUserData, userData}) {
    const [selectedType, setSelectedType] = useState(null);


    const handleTypeSelection = (type) => {
        setSelectedType(type);
        setUserData({...userData, accountType: type})
    }

    return (
        <div className="Form_UserAccountType">
            <h1>Tipo de conta</h1>
            <div className='Form_UserAccountType_Container'>
                <button className={`Form_UserAccountType__Estudante ${selectedType === 'estudante' ? 'selected' : ''}`} onClick={() => handleTypeSelection('estudante')}>
                    <FontAwesomeIcon icon={faPenRuler} size="2xl" />
                    <span>Sou estudante</span>
                </button>
                <button className={`Form_UserAccountType__Corretor ${selectedType === 'corretor' ? 'selected' : ''}`} onClick={() => handleTypeSelection('corretor')}>
                    <FontAwesomeIcon icon={faChalkboardUser} size="2xl" />
                    <span>Sou corretor(a)</span>
                </button>
            </div>
            <div className='Form_UserAccountType_Footer'>
                <button onClick={nextStep}>Continuar</button>
                <p>Já tem uma conta? <Link to={"/loginform"}>Fazer login</Link></p>
            </div>
        </div>
    )
}