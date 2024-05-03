import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (

    <div className="flex flex-col justify-center items-center mt-8 text-white">
      <div
        id="login_card"
        className="bg-[#B68322] flex justify-center items-center p-6 w-[25%] rounded-[7px] flex-col mb-[50px]"
      >
        <span className="mt-3 text-[1.5rem]">Cadastro</span>

        <form action="" className="text-black">
          <div id="input_group" className="mt-4">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Nome..."
              className="p-[7px] w-[300px] rounded-[7px] mb-3"
            />

            <input
              type="email"
              name="email-login"
              id="email-login"
              placeholder="E-mail..."
              required
              className="p-[7px] w-[300px] rounded-[7px] mb-3"
            />
            <input
              type="password"
              name="password-login"
              id="password-login"
              placeholder="Senha..."
              required
              className="p-[7px] w-[300px] rounded-[7px]"
            />
          </div>

          <div id="login" className="flex flex-col mb-3 mt-3 text-white">
            <span>Já possui uma conta?</span>
            <Link to={"/login"} className="hover:underline">
              Logar-se
            </Link>
          </div>

          <Link to={"/login"}>
            <button
              id="loginButton"
              className="bg-white hover:bg-green-950 hover:text-white duration-300 w-[300px] rounded-[7px] p-[7px] text-black font-bold "
            >
              Cadastrar-se
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
