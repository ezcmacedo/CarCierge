import React from 'react'
import { Link } from 'react-router-dom'
import CarCiergeLogo from '../img/CarCiergeLogo.png'
import { UilUserCircle } from '@iconscout/react-unicons'

function Header() {
    return (
        <div>
            <div id="navbar" className='bg-[#090B01] p-3'>
                <div id="contents" className='flex items-center justify-between'>
                    <div id="logo" className=''>

                        <Link to='/'>
                        <img src={CarCiergeLogo} alt="" className='w-16' />
                        </Link>
                    </div>

                    <div id="items" className='text-[#B68322] flex gap-6'>
                        <a href="Services">
                            Serviços
                        </a>
                        <a href="About">
                            Quem Somos
                        </a>
                        <a href="Cars">
                            Veículos
                        </a>
                        <Link to={"/login"} className='flex gap-1'><UilUserCircle/>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header