import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../axiosConfig'; // Importe sua configuração do axios

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      setEmailError(""); // Limpa o erro se o email estiver válido
    } else {
      setEmailError("Por favor, insira um email válido.");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordError(""); // Limpa o erro se a senha tiver pelo menos 8 caracteres
    } else {
      setPasswordError("Sua senha deve ter pelo menos 8 caracteres.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    if (!emailError && !passwordError) {
      try {
        const response = await axiosInstance.post('/auth/login', {
          email,
          password
        });

        if (response.status === 200) {
          // Salvar token e redirecionar
          const token = response.data.token;
          localStorage.setItem('token', token);
          navigate('/');
          console.log("Login realizado com sucesso!");
          window.location.reload();
        } else {
          setLoginError("Falha ao realizar login. Verifique suas credenciais.");
        }
      } catch (error) {
        setLoginError("Erro ao realizar login. Verifique suas credenciais.");
        console.error('Erro ao realizar login:', error);
      }
    } else {
      console.log("Verifique os campos e tente novamente.");
    }
  };

  return (
      <div className="flex justify-center items-center text-white mt-16 mb-16 ml-16 mr-16">
        <div
            id="login_card"
            className="bg-[#B68322] flex justify-center items-center p-6 m-10 w-[25%] rounded-[7px] flex-col"
        >
          <span className="mt-1 mb-1 text-[1.5rem]">Bem vindo de volta</span>

          <form action="" onSubmit={handleSubmit}>
            <div id="input_group" className="mt-6 text-black">
              <input
                  type="email"
                  name="email-login"
                  id="email-login"
                  placeholder="E-mail..."
                  className={`p-[7px] w-[300px] rounded-[7px] ${emailError ? "border-red-500" : ""}`}
                  value={email}
                  onChange={handleEmailChange}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}

              <input
                  type="password"
                  name="password-login"
                  id="password-login"
                  placeholder="Senha..."
                  className={`p-[7px] w-[300px] rounded-[7px] m-3 text-black ${passwordError ? "border-red-500" : ""}`}
                  value={password}
                  onChange={handlePasswordChange}
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>

            {loginError && <p className="text-red-500">{loginError}</p>}

            <div id="cadastro" className="flex flex-col mb-3">
              <span>Ainda não tem uma conta?</span>
              <Link to={"/register"} className="hover:underline">Cadastre-se</Link>
            </div>

            <button
                type="submit"
                id="loginButton"
                className="bg-white hover:bg-green-950 hover:text-white duration-300 w-[300px] rounded-[7px] p-[7px] text-black font-bold">
              Entrar
            </button>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;
