import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig'; // Importe o axios configurado

function CarsInfo() {
    const [cars, setCars] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        ano: '',
        cor: '',
        marca: '',
        modelo: '',
        placa: '',
        status: '',
        taxa_diaria: '',
        taxa_hora: '',
        descricao: ''
    });

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axiosInstance.get('/cars'); // Faz a requisição ao endpoint '/cars'
                setCars(response.data);
            } catch (error) {
                console.error('Erro ao buscar carros:', error);
            }
        };
        fetchCars();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddCar = async () => {
        try {
            const response = await axiosInstance.post('/cars', formData);
            setCars([...cars, response.data]);
            setFormData({
                id: '',
                ano: '',
                cor: '',
                marca: '',
                modelo: '',
                placa: '',
                status: '',
                taxa_diaria: '',
                taxa_hora: '',
                descricao: ''
            });
        } catch (error) {
            console.error('Erro ao adicionar carro:', error);
        }
    };

    const handleUpdateCar = async () => {
        try {
            const response = await axiosInstance.put(`/cars/${formData.id}`, formData);
            setCars(cars.map(car => car.id === formData.id ? response.data : car));
            setFormData({
                id: '',
                ano: '',
                cor: '',
                marca: '',
                modelo: '',
                placa: '',
                status: '',
                taxa_diaria: '',
                taxa_hora: '',
                descricao: ''
            });
        } catch (error) {
            console.error('Erro ao atualizar carro:', error);
        }
    };

    const handleDeleteCar = async () => {
        try {
            await axiosInstance.delete(`/cars/${formData.id}`);
            setCars(cars.filter(car => car.id !== formData.id));
            setFormData({
                id: '',
                ano: '',
                cor: '',
                marca: '',
                modelo: '',
                placa: '',
                status: '',
                taxa_diaria: '',
                taxa_hora: '',
                descricao: ''
            });
        } catch (error) {
            console.error('Erro ao deletar carro:', error);
        }
    };

    const handleRowClick = (car) => {
        setFormData(car);
    };

    return (
        <div className="ml-10 mr-10 mt-5 mb-30">
            <h2 className="bg-[#B68322] text-[1.1rem] font-bold">Lista de Carros</h2>
            <table>
                <thead>
                <tr className="bg-[#B68322]">
                    <th className="text-[0.8rem]">ID</th>
                    <th className="text-[0.8rem]">Ano</th>
                    <th className="text-[0.8rem]">Cor</th>
                    <th className="text-[0.8rem]">Marca</th>
                    <th className="text-[0.8rem]">Modelo</th>
                    <th className="text-[0.8rem] w-[rem]">imagem</th>
                    <th className="text-[0.8rem]">Placa</th>
                    <th className="text-[0.8rem]">Status</th>
                    <th className="text-[0.8rem]">Taxa Diária</th>
                    <th className="text-[0.8rem]">Taxa Hora</th>
                    <th className="text-[0.8rem]">Descrição</th>
                    <th className="text-[0.8rem]">created_at</th>
                    <th className="text-[0.8rem]">updated_at</th>
                </tr>
                </thead>
                <tbody className="bg-white text-[0.9rem]">
                {cars.map((car) => (
                    <tr key={car.id} onClick={() => handleRowClick(car)}>
                        <td className="text-[0.8rem] w-[10rem] p-1">{car.id}</td>
                        <td className="text-[0.8rem] w-[1rem] p-1">{car.ano}</td>
                        <td className="text-[0.8rem] p-1">{car.cor}</td>
                        <td className="text-[0.8rem] p-1">{car.marca}</td>
                        <td className="text-[0.8rem] p-1">{car.modelo}</td>
                        <td className="text-[0.8rem] max-w-[10rem] p-1 truncate">{car.imagem}</td>
                        <td className="text-[0.8rem] p-1">{car.placa}</td>
                        <td className="text-[0.8rem] p-1">{car.status}</td>
                        <td className="text-[0.8rem] p-1">{car.taxa_diaria}</td>
                        <td className="text-[0.8rem] p-1">{car.taxa_hora}</td>
                        <td className="text-[0.7rem] p-1 max-w-[14rem] truncate">{car.descricao}</td>
                        <td className="text-[0.7rem] p-1 max-w-[10rem] truncate">{car.created_at}</td>
                        <td className="text-[0.7rem] p-1 max-w-[10rem] truncate">{car.updated_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="mt-5">
                <input type="hidden" name="id" value={formData.id}/>
                <input type="text" name="ano" value={formData.ano} onChange={handleInputChange} placeholder="Ano"
                       className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="cor" value={formData.cor} onChange={handleInputChange} placeholder="Cor"
                       className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="marca" value={formData.marca} onChange={handleInputChange} placeholder="Marca"
                       className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="modelo" value={formData.modelo} onChange={handleInputChange}
                       placeholder="Modelo" className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="imagem" value={formData.imagem} onChange={handleInputChange} placeholder="Imagem"
                       className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="placa" value={formData.placa} onChange={handleInputChange} placeholder="Placa"
                       className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="status" value={formData.status} onChange={handleInputChange}
                       placeholder="Status" className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="taxa_diaria" value={formData.taxa_diaria} onChange={handleInputChange}
                       placeholder="Taxa Diária" className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="taxa_hora" value={formData.taxa_hora} onChange={handleInputChange}
                       placeholder="Taxa Hora" className="p-2 border rounded mb-2 mr-2"/>
                <input type="text" name="descricao" value={formData.descricao} onChange={handleInputChange}
                       placeholder="Descrição" className="p-2 border rounded mb-2 mr-2"/>
                <div className="mt-2">
                    <button onClick={handleAddCar} className="p-2 bg-green-500 text-white rounded mr-2">Adicionar
                    </button>
                    <button onClick={handleUpdateCar} className="p-2 bg-blue-500 text-white rounded mr-2">Atualizar
                    </button>
                    <button onClick={handleDeleteCar} className="p-2 bg-red-500 text-white rounded">Deletar</button>
                </div>
            </div>
        </div>
    );
}

export default CarsInfo;
