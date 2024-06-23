import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FormularioPagamentoCartao from './FormularioPagamentoCartao';
import FormularioPagamentoPix from './FormularioPagamentoPix';
import axiosInstance from '../axiosConfig';
import criarReserva from './CriarReserva';
import FazerPagamento from "../Components/FazerPagamento";
import {jwtDecode} from 'jwt-decode';

const Pagamento = () => {
    const location = useLocation();
    const { nomeUsuario, idCarro, taxaDiaria } = location.state || {};

    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
        return `${year}-${month}-${day}`;
    };

    // Obtém o token do localStorage e decodifica
    const token = localStorage.getItem('token'); // Substitua 'token' pelo nome correto do item no localStorage
    const decodedToken = jwtDecode(token);

    // Obtém o userId do token decodificado
    const userId = decodedToken.id;

    const [formData, setFormData] = useState({
        cardNumber: '',
        nameOnCard: '',
        expiryDate: '',
        cvv: '',
        rentalDate: getCurrentDate(),
        returnDate: getCurrentDate(),
    });

    const [errors, setErrors] = useState({
        cardNumber: '',
        nameOnCard: '',
        expiryDate: '',
        cvv: '',
    });

    const [paymentPreview, setPaymentPreview] = useState(0);
    const [carroInfo, setCarroInfo] = useState({
        imagem: null,
        marca: '',
        modelo: '',
    });

    const [formaPagamento, setFormaPagamento] = useState('Cartão');

    const [reservaCriada, setReservaCriada] = useState(false); // Para rastrear se a reserva foi criada

    useEffect(() => {
        const fetchCarroInfo = async () => {
            try {
                const response = await axiosInstance.get(`/cars/${idCarro}`);
                const { imagem, marca, modelo } = response.data;
                setCarroInfo({ imagem, marca, modelo });

                console.log(`Testando endpoint /reservations/user/${userId}/car/${idCarro}`);
                const reservationsResponse = await axiosInstance.get(`/reservations/user/${userId}/car/${idCarro}`);
                console.log('Reservas encontradas:', reservationsResponse.data);

            } catch (error) {
                console.error('Erro ao buscar informações do carro:', error);
            }
        };

        if (idCarro) {
            fetchCarroInfo();
        }
    }, [idCarro]);

    const handleCardNumberChange = (e) => {
        const { value } = e.target;
        const cleanedValue = value.replace(/\D/g, '');
        const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 ');

        setFormData((prevData) => ({
            ...prevData,
            cardNumber: formattedValue,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            cardNumber: '',
        }));
    };

    const handleExpiryDateChange = (e) => {
        const { value } = e.target;
        const cleanedValue = value.replace(/\D/g, '');
        let formattedValue = cleanedValue;

        if (cleanedValue.length > 2) {
            formattedValue = cleanedValue.slice(0, 2) + '/' + cleanedValue.slice(2, 4);
        }

        setFormData((prevData) => ({
            ...prevData,
            expiryDate: formattedValue,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            expiryDate: '',
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cvv' && /^[0-9]*$/.test(value)) {
            if (value.length <= 3) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: '',
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: 'CVV deve ter no máximo 3 dígitos.',
                }));
            }
        } else if (name === 'nameOnCard') {
            if (/^[a-zA-Z\s]*$/.test(value)) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: '',
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: 'Nome no cartão deve conter apenas letras.',
                }));
            }
        } else if (name !== 'nameOnCard') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'O campo só aceita números.',
            }));
        }
    };

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const calculatePaymentPreview = () => {
        const { rentalDate, returnDate } = formData;
        if (rentalDate && returnDate) {
            const rental = new Date(rentalDate);
            const returnD = new Date(returnDate);
            const diffTime = Math.abs(returnD - rental);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const pricePerDay = taxaDiaria || 0;
            setPaymentPreview(diffDays * pricePerDay);
        }
    };

    useEffect(() => {
        calculatePaymentPreview();
    }, [formData.rentalDate, formData.returnDate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reservaData = {
            data_reserva: formData.rentalDate,
            data_fim_reserva: formData.returnDate,
            status_reserva: 'Em andamento',
            userId: userId,
            carId: idCarro,
        };

        try {
            await criarReserva(reservaData);

            setReservaCriada(true); // Define a reserva como criada
        } catch (error) {
            console.error('Erro ao criar a reserva:', error);
        }
    };

    function mostrarAlerta() {
        alert('Carro alugado com sucesso');
    }

    const handleFormaPagamentoChange = (e) => {
        const { value } = e.target;
        setFormaPagamento(value);
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center mt-2 mb-5'>
            <form onSubmit={handleSubmit}
                  className='bg-[#B68322] w-[30%] min-h-screen rounded-lg m-2 p-3 mt-6 space-y-4'>
                <div>
                    <h1 className="text-2xl mb-1">Cliente: {nomeUsuario}</h1>
                    {carroInfo.imagem && (
                        <img
                            src={carroInfo.imagem}
                            alt={`Imagem do carro ${idCarro}`}
                            className="w-full rounded-lg mb-4"
                        />
                    )}
                    <p className="text-black text-2xl mt-1">
                        Carro: {carroInfo.marca} {carroInfo.modelo}
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <label htmlFor="metodo">Escolha a forma de pagamento:</label>
                    <select id="metodo" name="pagamento" onChange={handleFormaPagamentoChange}>
                        <option value="Cartão">Cartão de crédito</option>
                        <option value="Pix">Pix</option>
                    </select>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div>
                        <label htmlFor="rentalDate" className="block mb-2 mt-2">Data de Aluguel</label>
                        <input
                            type="date"
                            name="rentalDate"
                            value={formData.rentalDate}
                            onChange={handleDateChange}
                            min={getCurrentDate()} // Define a data mínima como a data atual
                            className="w-[350px] p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="returnDate" className="block mb-2 mt-2">Data de Devolução</label>
                        <input
                            type="date"
                            name="returnDate"
                            value={formData.returnDate}
                            onChange={handleDateChange}
                            min={formData.rentalDate} // Define a data mínima como a data de aluguel selecionada
                            className="w-[350px] p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 mt-2">Prévia do Pagamento</label>
                        <p className="w-[350px] p-2  border border-gray-300 rounded-md bg-white text-black">
                            R$ {paymentPreview}
                        </p>
                    </div>

                    {formaPagamento === 'Cartão' && (
                        <FormularioPagamentoCartao
                            formData={formData}
                            errors={errors}
                            handleCardNumberChange={handleCardNumberChange}
                            handleChange={handleChange}
                            handleExpiryDateChange={handleExpiryDateChange}
                        />
                    )}
                    {formaPagamento === 'Pix' && (
                        <FormularioPagamentoPix
                            formData={formData}
                            errors={errors}
                            handleChange={handleChange}
                        />
                    )}

                    <button onClick={mostrarAlerta} type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-10 mb-6">Confirmar Pedido
                    </button>
                </div>
            </form>

            {reservaCriada && (
                <FazerPagamento
                    key={reservaCriada ? "reload" : "initial"}
                    userId={userId}
                    carId={idCarro}
                    status="pago"
                    metodo_pagamento={formaPagamento}
                    valor={paymentPreview}
                />
            )}
        </div>
    );
};

export default Pagamento;
