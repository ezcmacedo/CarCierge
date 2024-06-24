import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig'; // Importe o axios configurado

function PaymentsInfo() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axiosInstance.get('/payments/custom'); // Faz a requisição ao endpoint '/payments'
                console.log('Response data:', response.data);
                if (Array.isArray(response.data)) {
                    setPayments(response.data);
                } else {
                    console.error('Unexpected response data format:', response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar pagamentos:', error);
            }
        };
        fetchPayments();
    }, []);

    return (
        <div className="ml-10 mr-10 mt-5 mb-30">
            <h2 className="bg-[#B68322] text-[1.1rem] font-bold">Lista de Pagamentos</h2>
            <table>
                <thead>
                <tr className="bg-[#B68322] ">
                    <th className="text-[0.8rem]">ID</th>
                    <th className="text-[0.8rem]">Criado em</th>
                    <th className="text-[0.8rem]">Data do Pagamento</th>
                    <th className="text-[0.8rem]">Método de Pagamento</th>
                    <th className="text-[0.8rem]">Status</th>
                    <th className="text-[0.8rem]">Atualizado em</th>
                    <th className="text-[0.8rem]">Valor</th>
                    <th className="text-[0.8rem]">ID da Reserva</th>
                </tr>
                </thead>
                <tbody className="bg-white text-[0.9rem]">
                {payments.map((payment) => (
                    <tr key={payment.id}>
                        <td className="text-[0.8rem] p-1 w-[20rem]">{payment.id}</td>
                        <td className="text-[0.8rem] p-1 ">{payment.created_at}</td>
                        <td className="text-[0.8rem] p-1 ">{payment.data_pagamento}</td>
                        <td className="text-[0.8rem] p-1 ">{payment.metodo_pagamento}</td>
                        <td className="text-[0.8rem] p-1 ">{payment.status}</td>
                        <td className="text-[0.8rem] p-1 ">{payment.updated_at}</td>
                        <td className="text-[0.8rem] p-1 ">{payment.valor}</td>
                        <td className="text-[0.8rem] p-1 w-[20rem]">{payment.reservation_id}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PaymentsInfo;
