import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../axiosConfig';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples
    if (
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.includes("@") &&
        password.length >= 8 &&
        phoneNumber.trim() !== "" &&
        city.trim() !== "" &&
        state.trim() !== "" &&
        address.trim() !== ""
    ) {
      try {
        const response = await axiosInstance.post('/auth/register', {
          firstName,
          lastName,
          email,
          password,
          phone_number: phoneNumber,
          city,
          state,
          address,
        });

        if (response.status === 200) {
          alert("Usuário registrado com sucesso!");
          navigate('/login');
        } else {
          alert("Erro ao registrar o usuário.");
        }
      } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        alert("Erro ao registrar o usuário.");
      }
    } else {
      alert("Preencha todos os campos corretamente.");
    }
  };

  return (
      <div className="flex flex-col justify-center items-center mt-8 text-white">
        <div
            id="login_card"
            className="bg-[#B68322] flex justify-center items-center p-6 w-[25%] rounded-[7px] flex-col mb-[50px]"
        >
          <span className="mt-3 text-[1.5rem]">Cadastro</span>

          <form onSubmit={handleSubmit} className="text-black">
            <div id="input_group" className="mt-4">
              <input
                  type="text"
                  name="firstName"
                  placeholder="Nome..."
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-[7px] w-[300px] rounded-[7px] mb-3"
              />
              <input
                  type="text"
                  name="lastName"
                  placeholder="Sobrenome..."
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-[7px] w-[300px] rounded-[7px] mb-3"
              />
              <input
                  type="email"
                  name="email"
                  placeholder="E-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-[7px] w-[300px] rounded-[7px] mb-3"
              />
              <input
                  type="password"
                  name="password"
                  placeholder="Senha..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-[7px] w-[300px] rounded-[7px] mb-3"
              />
              <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Telefone..."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="p-[7px] w-[300px] rounded-[7px] mb-3"
              />
              <input
                  type="text"
                  name="city"
                  placeholder="Cidade..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="p-[7px] w-[300px] rounded-[7px] mb-3"
              />
              <input
                  type="text"
                  name="state"
                  placeholder="Estado..."
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="p-[7px] w-[300px] rounded-[7px] mb-3"
              />
              <input
                  type="text"
                  name="address"
                  placeholder="Endereço..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="p-[7px] w-[300px] rounded-[7px] mb-3"
              />
            </div>

            <div id="login" className="flex flex-col mb-3 mt-3 text-white">
              <span>Já possui uma conta?</span>
              <Link to={"/login"} className="hover:underline">
                Logar-se
              </Link>
            </div>

            <button
                type="submit"
                id="loginButton"
                className="bg-white hover:bg-green-950 hover:text-white duration-300 w-[300px] rounded-[7px] p-[7px] text-black font-bold "
            >
              Cadastrar-se
            </button>
          </form>
        </div>
      </div>
  );
};

export default RegisterPage;
