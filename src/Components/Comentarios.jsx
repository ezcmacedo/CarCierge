import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { jwtDecode } from 'jwt-decode';
import { formatDateTime } from '../utils/dataConverter';
import FazerComentario from "./FazerComentario";

function Comentarios({ carId }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchComments = async () => {
        try {
            const response = await axiosInstance.get(`/ratings/all`);
            setComments(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar comentários:', error);
            setError('Erro ao buscar comentários. Tente novamente.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []); // A dependência [] garante que fetchComments seja chamado apenas uma vez, na primeira renderização

    const handleCommentSubmit = () => {
        // Atualiza os comentários após o submit
        fetchComments();
    };

    const handleDelete = async (commentId) => {
        try {
            await axiosInstance.delete(`/ratings/${commentId}`);
            setComments(comments.filter(comment => comment.id !== commentId));
        } catch (error) {
            console.error('Erro ao deletar comentário:', error);
            setError('Erro ao deletar comentário. Tente novamente.');
        }
    };

    const renderStars = (rating) => {
        return (
            <IconContext.Provider value={{ color: "gold" }}>
                {Array(rating).fill().map((_, i) => (
                    <FaStar key={i} />
                ))}
            </IconContext.Provider>
        );
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro ao carregar comentários: {error.message}</p>;
    }

    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken ? decodedToken.id : null;

    // Filtrar os comentários pelo carId, se existir
    const filteredComments = carId ? comments.filter(comment => comment.car.id === carId) : comments;

    return (
    <>
        <FazerComentario carId={carId} onCommentSubmit={handleCommentSubmit}/>
        <div className="w-[31.7rem] min-h-[12rem] flex flex-col bg-black mt-0 mb-[6rem] rounded-2xl">
            <div>
                <h1 className="text-white mt-5 mb-2 text-xl">Comentários</h1>
            </div>
            {filteredComments.length === 0 ? (
                <p className="text-white">Nenhum comentário disponível para este carro.</p>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    {filteredComments.map((comment) => (
                        <div key={comment.id} className="flex flex-col justify-center items-center mb-7">
                            <div className=" w-[28rem] flex justify-between items-start">
                                <p className="text-white mb-2">Nome: {comment.user.firstName} {comment.user.lastName}</p>
                                <div className="flex items-center">
                                    <p className="text-white ml-4">Avaliação: </p>
                                    {renderStars(comment.rating)}
                                </div>
                            </div>
                            <p className="w-[28rem] bg-gray-800 text-white rounded px-2 py-1">
                                {comment.comentario}
                            </p>
                            <div className="w-[28rem] flex justify-between items-end mt-2">
                                {userId === comment.user.id && (
                                    <button
                                        className="w-[8rem] bg-[#B68322] hover:bg-blue-700 text-white font-bold py-0 px-4 rounded"
                                        onClick={() => handleDelete(comment.id)}
                                    >
                                        Deletar
                                    </button>
                                )}
                                <p className="text-white">Data: {formatDateTime(comment.createdAt)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>
    );
}

export default Comentarios;
