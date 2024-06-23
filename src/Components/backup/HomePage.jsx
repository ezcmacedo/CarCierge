import React, { useEffect } from 'react';
import axios from 'axios';

import CarouselHome from '../Components/CarouselHome/CarouselHome';
import CarouselMenu from '../Components/CarouselHome/CarouselMenu';
import ServicesBanner from '../Components/ServicesBanner';
import CarsBanner from '../Components/CarsBanner';

function HomePage() {

    useEffect(() => {
        // Função para buscar usuários do servidor
        const fetchUsers = async () => {
            try {
                // Obter o token do localStorage
                const token = localStorage.getItem('token');

                // Configurar o cabeçalho de autorização
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                // Fazer a requisição GET com o cabeçalho de autorização
                const response = await axios.get('http://localhost:8080/users', config);
                console.log(response.data); // Exibe os dados dos usuários no console
            } catch (error) {
                console.error('Erro ao buscar os usuários:', error);
            }
        };

        fetchUsers(); // Chama a função para buscar usuários quando o componente monta
    }, []); // O array vazio [] garante que o useEffect seja executado apenas uma vez

    return (
        <>
            <CarouselMenu />
            <CarouselHome />
            <ServicesBanner />
            <CarsBanner />
        </>
    );
}

export default HomePage;
