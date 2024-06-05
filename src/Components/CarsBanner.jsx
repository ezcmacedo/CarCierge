import React, { useState, useEffect } from 'react';

const CarsBanner = () => {
    const carros = [
        {
            nome: "BMW X1 2024",
            foto: "/img/carros/convencional/conv-bmw-x1-2024-1-principal.png"
        },
        {
            nome: "Toyota Camry 2019",
            foto: "/img/carros/convencional/conv-toyota-camry-2019-1-photoroom.png"
        },
        {
            nome: "Volvo XC40 2021",
            foto: "/img/carros/convencional/conv-volvo-xc40-2021-1-photoroom.png"
        },
        {
            nome: "BMW X7 RR Edition",
            foto: "/img/carros/eventos/limousine-BMW-X7-Rolls-Royce-Edition-1-principal.png"
        },
        {
            nome: "Mercedes Maybach 600",
            foto: "/img/carros/eventos/limusine-mercedes-mercedes-maybach-600-pullman-2015-1-Principal.png"
        },
        {
            nome: "Ranger Rover VIP Edition",
            foto: "/img/carros/eventos/limusine-Ranger-rover-VIP-Edition-1-principal.png"
        },
        {
            nome: "Rolls Royce Phantom",
            foto: "/img/carros/eventos/limusine-Rolls-Royce-Phantom-1-principal.png"
        },
        {
            nome: "Audi RS6 Avant",
            foto: "/img/carros/luxo/audi-rs6-avant1-Photoroom.png"
        },
        {
            nome: "BMW X6 2020",
            foto: "/img/carros/luxo/bmw-x6-2020-1-Photoroom.png"
        },
        {
            nome: "Land Rover Velar 2021",
            foto: "/img/carros/luxo/land-rover-range-rover-velar-2021-2-Photoroom.png"
        },
        {
            nome: "Mercedes Benz S580 2021",
            foto: "/img/carros/luxo/mercedes-benz-s580-009-2021-3-Photoroom.png"
        },
    ];

    const [visibleCars, setVisibleCars] = useState([]);

    const getRandomCars = () => {
        let shuffled = carros.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6);
    };

    useEffect(() => {
        setVisibleCars(getRandomCars());

        const interval = setInterval(() => {
            setVisibleCars(getRandomCars());
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='w-[99%] m-auto text-[1.7rem] bg-[#B68322] font-inter font-extrabold text-white'>
                <h1>Nossos Carros</h1>
            </div>
            <div className='pb-[12rem]'>
                <ul className='grid grid-cols-3 gap-5 font-inter text-white'>
                    {visibleCars.map((carro, index) => (
                        <li key={index} className='w-[80%] min-h-[500px] flex flex-col m-auto justify-center items-center bg-[#B68322] opacity-90 z-0 mt-10'>
                            <img src={carro.foto} alt={carro.nome} className='w-[80%] z-10'/>
                            <p className='text-[1.8rem]'>{carro.nome}</p>
                            <button className='bg-[#35353D] py-1 px-3 mt-10'>Mais Informações</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CarsBanner;
