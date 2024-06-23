import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    if (!emailError &&!passwordError) {
      // Aqui você pode adicionar a lógica para autenticar o usuário
      console.log("Login realizado com sucesso!");
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
              className={`p-[7px] w-[300px] rounded-[7px] ${emailError? "border-red-500" : ""}`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}

            <input
              type="password"
              name="password-login"
              id="password-login"
              placeholder="Senha..."
              className={`p-[7px] w-[300px] rounded-[7px] m-3 text-black ${passwordError? "border-red-500" : ""}`}
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>

          <div id="cadastro" className="flex flex-col mb-3">
            <span>Ainda não tem uma conta?</span>
            <Link to={"/register"} className="hover:underline">Cadastre-se</Link>
          </div>

          <Link to={'/'}>
            <button
                id="loginButton"
                className="bg-white hover:bg-green-950 hover:text-white duration-300 w-[300px] rounded-[7px] p-[7px] text-black font-bold "
              >
                Entrar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;