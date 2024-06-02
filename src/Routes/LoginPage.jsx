import React from "react";
import { Link } from "react-router-dom";

const LoginPage =()=> {
  return (
    <div className="flex justify-center items-center mt-[50px] text-white">
      <div
        id="login_card"
        className="bg-[#B68322] flex justify-center items-center p-6 w-[25%] rounded-[7px] flex-col"
      >
        <span className="mt-6 text-[1.5rem]">Bem vindo de volta</span>

        <form action="">
          <div id="input_group" className="mt-10 text-black">
            <input
              type="email"
              name="email-login"
              id="email-login"
              placeholder="E-mail..."
              className="p-[7px] w-[300px] rounded-[7px]"
            />
            <input
              type="password"
              name="password-login"
              id="password-login"
              placeholder="Senha..."
              className="p-[7px] w-[300px] rounded-[7px] m-3 text-black"
            />
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
}

export default LoginPage;
