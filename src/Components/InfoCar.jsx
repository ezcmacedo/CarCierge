import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from '../axiosConfig';
import FazerComentario from "./FazerComentario";
import Comentarios from "./Comentarios";
import {jwtDecode} from 'jwt-decode'; // Corrigir importação

const InfoCar = () => {
  const { id } = useParams();
  const [carro, setCarro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

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
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const { firstName, lastName } = decodedToken;
        setUsuario({ nome: `${firstName} ${lastName}` });
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  }, []);

  const handleAlugarClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
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
      <div className="min-h-screen flex flex-col justify-center items-center mb-[-5%] mt-[9.5rem]">
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
              onClick={handleAlugarClick}
              className="m-2 text-white bg-[#123A08] hover:bg-[#2d802d] transition duration-300 p-2 rounded-lg"
          > Alugar agora
          </button>
        </div>
        <FazerComentario carId={id} />
        <Comentarios />
      </div>
  );
};

export default InfoCar;
