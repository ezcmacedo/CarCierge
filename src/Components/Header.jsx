import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate para redirecionar após logout
import CarCiergeLogo from '../img/CarCiergeLogo.png';
import { UilUserCircle } from '@iconscout/react-unicons';
import {jwtDecode} from 'jwt-decode'; // Corrigido: jwtDecode deve ser importado diretamente

function Header() {
    const [user, setUser] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token); // Decodifica o token JWT
                console.log(decoded); // Debug: Verifique o conteúdo do token decodificado
                setUser(decoded); // Define o usuário no estado
            } catch (error) {
                console.error('Erro ao decodificar token:', error);
                setUser(null); // Limpa o estado do usuário em caso de erro
            }
        } else {
            setUser(null); // Limpa o estado do usuário se não houver token
        }
    }, []);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setMenuVisible(false);
        navigate('/login'); // Redireciona para a página de login
    };

    return (
        <div>
            <div id="navbar" className='bg-[#090B01] p-3'>
                <div id="contents" className='flex items-center justify-between'>
                    <div id="logo">
                        <Link to='/'>
                            <img src={CarCiergeLogo} alt="" className='w-16' />
                        </Link>
                    </div>
                    <div id="items" className='text-[#B68322] flex gap-6'>
                        <Link to='/Veiculos'>
                            Veículos
                        </Link>
                        <Link to='/AboutUs'>
                            Sobre Nós
                        </Link>
                        {user ? (
                            <div className='relative'>
                                <div className='flex gap-1 items-center cursor-pointer' onClick={toggleMenu}>
                                    <UilUserCircle />
                                    {user.firstName} {user.lastName}
                                </div>
                                {menuVisible && (
                                    <div id="menu" className="absolute w-20 h-20 bg-black right-[-0.7rem] top-[2.8rem] pb-3 pt-0 border-amber-500 border-l-2 border-b-2">
                                        <ul>
                                            <Link to='/AdminTerminal'><li className="m-2">Conta</li></Link>
                                            <li className="m-2" onClick={handleLogout}>Logout</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to='/login' className='flex gap-1'>
                                <UilUserCircle />
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
