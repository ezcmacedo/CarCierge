import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig'; // Importe o axios configurado

function ReservationsInfo() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axiosInstance.get('/reservations'); // Faz a requisição ao endpoint '/reservations'
                setReservations(response.data);
                console.log(reservations);
            } catch (error) {
                console.error('Erro ao buscar reservas:', error);
            }
        };
        fetchReservations();
    }, []);

    return (
        <div className="ml-10 mr-10 mt-5 mb-30">
            <h2 className="bg-[#B68322] text-[1.1rem] font-bold">Lista de Reservas</h2>
            <table>
                <thead>
                <tr className="bg-[#B68322] ">
                    <th className="text-[0.8rem]">ID</th>
                    <th className="text-[0.8rem]">Criado em</th>
                    <th className="text-[0.8rem]">Data da Reserva</th>
                    <th className="text-[0.8rem]">Data Fim da Reserva</th>
                    <th className="text-[0.8rem]">Status da Reserva</th>
                    <th className="text-[0.8rem]">Atualizado em</th>
                    <th className="text-[0.8rem]">ID do Carro</th>
                    <th className="text-[0.8rem]">ID do Usuário</th>
                </tr>
                </thead>
                <tbody className="bg-white text-[0.9rem]">
                {reservations.map((reservation) => (
                    <tr key={reservation.id}>
                        <td className="text-[0.8rem] p-1">{reservation.id}</td>
                        <td className="text-[0.8rem] p-1 ">{reservation.created_at}</td>
                        <td className="text-[0.8rem] p-1 ">{reservation.data_reserva}</td>
                        <td className="text-[0.8rem] p-1 ">{reservation.data_fim_reserva}</td>
                        <td className="text-[0.8rem] p-1">{reservation.status_reserva}</td>
                        <td className="text-[0.8rem] p-1">{reservation.updated_at}</td>
                        <td className="text-[0.8rem] p-1">{reservation.car.id}</td>
                        <td className="text-[0.8rem] p-1">{reservation.user.id}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReservationsInfo;