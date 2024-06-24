import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig'; // Importe o axios configurado

function UsersInfo() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosInstance.get('/users'); // Faz a requisição ao endpoint
                setUsers(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="ml-10 mr-10 mt-5 mb-5">
            <h2 className="bg-[#B68322] text-[1.1rem] font-bold">Lista de Usuários</h2>
            <table>
                <thead>
                <tr className="bg-[#B68322] ">
                    <th className="text-[0.8rem]" >ID</th>
                    <th className="text-[0.8rem]">Nome</th>
                    <th className="text-[0.8rem]">Sobrenome</th>
                    <th className="text-[0.8rem]">Email</th>
                    <th className="text-[0.8rem]">Telefone</th>
                    <th className="text-[0.8rem]">Endereço</th>
                    <th className="text-[0.8rem]">Cidade</th>
                    <th className="text-[0.8rem]">Estado</th>
                    <th className="text-[0.8rem]">Criado em</th>
                    <th className="text-[0.8rem]">Atualizado em</th>
                </tr>
                </thead>
                <tbody className="bg-white text-[0.9rem]">
                {users.map((user) => (
                    <tr key={user.id}>
                        <td className="text-[0.8rem] p-1 w-[17rem]">{user.id}</td>
                        <td className="text-[0.8rem] p-1">{user.firstName}</td>
                        <td className="text-[0.8rem] p-1">{user.lastName}</td>
                        <td className="text-[0.8rem] p-1">{user.email}</td>
                        <td className="text-[0.8rem] p-1">{user.phone_number}</td>
                        <td className="text-[0.8rem] p-1 truncate w-[17rem]">{user.address}</td>
                        <td className="text-[0.8rem] p-1">{user.city}</td>
                        <td className="text-[0.8rem] p-1">{user.state}</td>
                        <td className="text-[0.8rem] p-1">{user.created_at}</td>
                        <td className="text-[0.8rem] p-1">{user.updated_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersInfo;