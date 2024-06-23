import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const CarsBanner = () => {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                const response = await axiosInstance.get('/cars'); // Usar a instância configurada do Axios
                //console.log('Resposta do backend:', response.data); // Log de depuração
                setCarros(response.data);
            } catch (error) {
                console.error('Erro ao buscar os carros:', error);
            }
        };

        fetchCarros();
    }, []);

    return (
        <>
            <div className='w-[99%] m-auto text-[1.7rem] bg-[#B68322] font-inter font-extrabold text-white'>
                <h1>Nossos Carros</h1>
            </div>
            <div className='pb-[12rem]'>
                <ul className='grid grid-cols-3 gap-5 font-inter text-white'>
                    {carros.map((carro, index) => (
                        <li key={index} className='w-[80%] min-h-[26rem] flex flex-col m-auto justify-center items-center bg-[#B68322] opacity-90 z-0 mt-10'>
                            <img src={carro.imagem} alt={`${carro.marca} ${carro.modelo}`} className='w-[80%] z-10'/>
                            <p className='text-[1.8rem]'>{carro.marca} {carro.modelo}</p>
                            <Link to={`/infoCar/${carro.id}`} className='bg-[#35353D] py-3 rounded-[7px] px-3 mt-10 mb-10'>Mais Informações</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CarsBanner;
