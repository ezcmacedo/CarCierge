import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from '../axiosConfig';
import {jwtDecode} from 'jwt-decode'; // Importa a biblioteca jwt-decode

const InfoCar = () => {
  const { id } = useParams();
  const [carro, setCarro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState(null); // Estado para armazenar informações do usuário
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const fetchCarro = async () => {
      try {
        const response = await axiosInstance.get(`/cars/${id}`);
        setCarro(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os detalhes do carro:', error);
        setError('Erro ao buscar os detalhes do carro');
        setLoading(false);
      }
    };

    fetchCarro();
  }, [id]);

  useEffect(() => {
    // Carregar informações do usuário do localStorage (se disponível)
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decodificar o token
        const decodedToken = jwtDecode(token);

        // Extrair informações do payload decodificado
        const { firstName, lastName} = decodedToken; // Substitua com as propriedades corretas do seu token
        setUsuario({ nome: `${firstName} ${lastName}`});
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  }, []);

  const handleAlugarClick = () => {
    // Verificar se o usuário está logado
    const token = localStorage.getItem('token');
    if (!token) {
      // Se não estiver logado, redirecionar para a página de login
      navigate('/login');
    } else {
      // Se estiver logado, pode prosseguir com o aluguel
      navigate('/pagamento', { state: { nomeUsuario: usuario.nome, idCarro: carro.id, taxaDiaria: carro.taxa_diaria } });
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!carro) {
    return <p>Carro não encontrado.</p>;
  }

  return (
      <div className="min-h-screen flex flex-col justify-center items-center mb-[-5%] mt-20">
        <div className="flex justify-around items-center gap-10 mt-[-10%] w-[70%] bg-[#B68322] rounded-lg px-12">
          <img className="w-[50%]" src={carro.imagem} alt={`${carro.marca} ${carro.modelo}`} />
          <div id="listaCarro">
            <h1 className="text-white text-[2.0rem] mb-4">{`${carro.marca} ${carro.modelo}`}</h1>
            <ul className="text-white list-none text-[1.2rem]">
              <li>Ano: {carro.ano}</li>
              <li>Cor: {carro.cor}</li>
              <li>Placa: {carro.placa}</li>
              <li>Taxa Diária: R$ {carro.taxa_diaria}</li>
              <li>Taxa por Hora: R$ {carro.taxa_hora}</li>
              <li>Status: {carro.status}</li>
            </ul>
          </div>
        </div>
        <div className="text-black list-none text-[1.2rem] bg-white mt-[1rem] w-[70%] rounded-lg p-3">{carro.descricao}</div>
        <div id="alugar" className="w-[500px] bg-[#B68322] mt-[1rem] p-5 flex flex-col rounded-lg ">
          <p className="text-[1.5rem] font-bold text-white">R$ {carro.taxa_diaria}/Diária</p>
          <button
              onClick={handleAlugarClick} // Evento ao clicar em Alugar agora
              className="m-2 text-white bg-[#123A08] hover:bg-[#2d802d] transition duration-300 p-2 rounded-lg"
          >
            Alugar agora
          </button>
        </div>
      </div>
  );
};

export default InfoCar;
