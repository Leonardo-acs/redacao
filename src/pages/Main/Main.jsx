
import { faCircleLeft, faUser, faHighlighter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Main() {
    const [sideMenuOpen, setSideMenuOpen] = useState(true);
    const menus = [
        { title: "Perfil", icon: "faUser" },
        { title: "Nova redação", icon: "faHighlighter}" },
    ]
    return (
        <div className="flex bg-white">
            <div className={
                `${sideMenuOpen ? 'w-56' : 'w-24'} 
                 duration-300 h-screen p-5 pt-8 bg-purple-500 relative rounded-r-lg`}>
                <img
                    src='./src/assets/images/control.png'
                    className={
                        `absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-purple-500
                        ${!sideMenuOpen && "rotate-180"}
                        `}
                    onClick={() => setSideMenuOpen(!sideMenuOpen)}
                />
                <div className='flex gap-4 items-center'>
                    <img
                        src='./src/assets/images/control.png'
                        className={`cursor-pointer duration-500 ${sideMenuOpen && "rotate-[360deg]"}`}
                    />
                    <h1 className={`
                    text-white origin-left font-medium text-xl duration-300 ${!sideMenuOpen && "scale-0"}
                    `}
                    >Home</h1>
                </div>
                <ul className='pt-6'>
                    <li className='text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer
                       p-2 hover:bg-light-white rounded-md mt-9'>
                        <FontAwesomeIcon icon={faUser} className='h-6'></FontAwesomeIcon>
                        <span className={`${!sideMenuOpen && 'hidden'} origin-left duration-200`}>Perfil</span>
                    </li>
                    <li className='text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer
                       p-2 hover:bg-light-white rounded-md mt-2'>
                        <FontAwesomeIcon icon={faHighlighter} className='h-6' />
                        <span className={`${!sideMenuOpen && 'hidden'} origin-left duration-200 whitespace-nowrap`}>Nova Redação</span>
                    </li>
                </ul>
            </div>
            <div className="p-7 text-2xl font-semibold flex-1 h-screen ">
                <h1 className='text-3xl font-bold text-[#333]'>Seja bem vindo(a) de volta, Luíza</h1>
            </div>
        </div>
    )
}