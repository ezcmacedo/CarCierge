import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CarsBanner = () => {
    const carros = [
        {
            id: 1,
            nome: "BMW X1 2024",
            foto: "https://live.staticflickr.com/65535/53773148637_3b6550b4c3_o.png"
        },
        {
            id: 2,
            nome: "Toyota Camry 2019",
            foto: "https://live.staticflickr.com/65535/53774068731_bb6667f501_o.png"
        },    
        {
            id: 3,
            nome: "Volvo XC40 2021",
            foto: "https://live.staticflickr.com/65535/53774389939_f9cef239f8_o.png"
            
        },
        {
            id: 4,
            nome: "BMW X7 RR Edition",
            foto: "https://live.staticflickr.com/65535/53773148897_cb0ec8684d_o.png"
        },
        {
            id: 5,
            nome: "Mercedes Maybach 600",
            foto: "https://live.staticflickr.com/65535/53774068946_35779fa627_o.png"
        },
        {
            id: 6,
            nome: "Ranger Rover VIP Edition",
            foto: "https://live.staticflickr.com/65535/53773148907_208189c9d9_o.png"
        },
        {
            id: 7,
            nome: "Rolls Royce Phantom",
            foto: "https://live.staticflickr.com/65535/53774485985_a7a59426c3_o.png"
        },
        {
            id: 8,
            nome: "Audi RS6 Avant",
            foto: "https://live.staticflickr.com/65535/53774069291_34e54b39aa_o.png"
        },
        {
            id: 9,
            nome: "BMW X6 2020",
            foto: "https://live.staticflickr.com/65535/53774486305_844a6f113f_o.png"
        },
        {
            id: 10,
            nome: "Land Rover Velar 2021",
            foto: "https://live.staticflickr.com/65535/53774069281_ae2ef02bd6_o.png"
        },
        {
            id: 11,
            nome: "Mercedes Benz S580 2021",
            foto: "https://live.staticflickr.com/65535/53774486300_f65cbf2e53_o.png"
        },
    ];
    
    return (
        <>
            <div className='w-[99%] m-auto text-[1.7rem] bg-[#B68322] font-inter font-extrabold text-white'>
                <h1>Nossos Carros</h1>
            </div>
            <div className='pb-[12rem]'>
                <ul className='grid grid-cols-3 gap-5 font-inter text-white'>
                    {carros.map((carro, index) => (
                        <li key={index} className='w-[80%] min-h-[26rem] flex flex-col m-auto justify-center items-center bg-[#B68322] opacity-90 z-0 mt-10'>
                            <img src={carro.foto} alt={carro.nome} className='w-[80%] z-10'/>
                            <p className='text-[1.8rem]'>{carro.nome}</p>
                        <Link to={`/infoCar/${carro.id}`} className='bg-[#35353D] py-3 rounded-[7px] px-3 mt-10'>Mais Informações</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CarsBanner;
