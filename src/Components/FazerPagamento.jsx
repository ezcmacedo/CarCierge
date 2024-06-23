import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

const FazerPagamento = ({ userId, carId, status, metodo_pagamento, valor }) => {
    const [reservationId, setReservationId] = useState(null);

    useEffect(() => {
        const fetchReservationId = async () => {
            try {
                const response = await axiosInstance.get(`/reservations/user/${userId}/car/${carId}`);
                if (response.data && response.data.length > 0) {
                    setReservationId(response.data[0].id); // Assumindo que a resposta é uma lista de reservas
                } else {
                    console.error('Nenhuma reserva encontrada para o usuário e carro especificados.');
                }
            } catch (error) {
                console.error('Erro ao buscar o reservationId:', error);
            }
        };

        fetchReservationId();
    }, [userId, carId]);

    useEffect(() => {
        const processPayment = async () => {
            if (reservationId) {
                const paymentData = {
                    reservationId,
                    status,
                    metodo_pagamento,
                    valor
                };

                try {
                    const response = await axiosInstance.post('/payments/processarpagamento', paymentData);
                    console.log('Pagamento processado com sucesso:', response.data);
                } catch (error) {
                    console.error('Erro ao processar o pagamento:', error);
                }
            }
        };

        processPayment();
    }, [reservationId, status, metodo_pagamento, valor]);
};

export default FazerPagamento;
