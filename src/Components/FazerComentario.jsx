import React, { useState } from 'react';
import axios from '../axiosConfig';
import {jwtDecode} from 'jwt-decode';

function FazerComentario({ carId, onCommentSubmit }) {
    const [avaliacao, setAvaliacao] = useState(0);
    const [comentario, setComentario] = useState('');
    const [erro, setErro] = useState(null);

    const handleAvaliacaoChange = (event) => {
        const newAvaliacao = parseInt(event.target.value, 10);
        setAvaliacao(newAvaliacao);
    };

    const handleComentarioChange = (event) => {
        setComentario(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (comentario.trim() === '') {
            setErro('Por favor, insira um comentário.');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const decodedToken = token ? jwtDecode(token) : null;
            const userId = decodedToken ? decodedToken.id : null;

            if (!userId) {
                setErro('Usuário não autenticado.');
                return;
            }

            const response = await axios.post('/ratings/fazercomentario', {
                rating: avaliacao,
                userId: userId,
                carId,
                comentario,
            });

            console.log('Comentário enviado com sucesso:', response.data);
            setAvaliacao(1);
            setComentario('');
            setErro(null);

            onCommentSubmit();

        } catch (error) {
            console.error('Erro ao enviar o comentário:', error);
            setErro('Erro ao enviar o comentário. Tente novamente.');
        }
    };

    return (
        <div className="w-[31.7rem] h-[22rem] flex flex-col bg-black mt-10 mb-10 rounded-2xl">
            <div>
                <h1 className="text-white mt-3 mb-2 text-xl">Deixe um comentario:</h1>
            </div>
            <form className="flex flex-col justify-center items-center " onSubmit={handleSubmit}>
                <div className="mb-2 flex flex-col justify-center items-center">
                    <label htmlFor="avaliacao" className="text-white">
                        Avaliação (1-5):
                    </label>
                    <input
                        type="number"
                        id="avaliacao"
                        min="1"
                        max="5"
                        value={avaliacao}
                        onChange={handleAvaliacaoChange}
                        className="w-[3rem] bg-gray-800 text-white rounded px-2 py-1 mb-2 mt-2 ml-1 mr-1"
                    />
                </div>
                <div className="flex flex-col justify-center items-center mb-7">
                    <label htmlFor="comentario" className="text-white mb-2">
                        Comentário:
                    </label>
                    <textarea
                        id="comentario"
                        value={comentario}
                        onChange={handleComentarioChange}
                        className="w-[28rem] bg-gray-800 text-white rounded px-2 py-1 resize-none"
                        rows="4"
                    />
                </div>
                {erro && (
                    <div className="text-red-500 mb-2">{erro}</div>
                )}
                <button type="submit" className="w-[8rem] bg-[#B68322] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default FazerComentario;
