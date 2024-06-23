import axiosInstance from '../axiosConfig'; // Importe axiosInstance do seu arquivo axiosConfig.js

const criarReserva = async (reservaData) => {
    try {
        const response = await axiosInstance.post('/reservations/addreserva', reservaData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar a reserva:', error);
        throw new Error('Erro ao criar a reserva.');
    }
};

export default criarReserva;
