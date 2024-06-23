import React from "react";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

const InfoCar = () => {
  const { id } = useParams();
  const carros = [
    {
      id: 1,
      nome: "BMW X1 2024",
      foto: "https://live.staticflickr.com/65535/53773148637_3b6550b4c3_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 2,
      nome: "Toyota Camry 2019",
      foto: "https://live.staticflickr.com/65535/53774068731_bb6667f501_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 3,
      nome: "Volvo XC40 2021",
      foto: "https://live.staticflickr.com/65535/53774389939_f9cef239f8_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 4,
      nome: "BMW X7 RR Edition",
      foto: "https://live.staticflickr.com/65535/53773148897_cb0ec8684d_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 5,
      nome: "Mercedes Maybach 600",
      foto: "https://live.staticflickr.com/65535/53774068946_35779fa627_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 6,
      nome: "Ranger Rover VIP Edition",
      foto: "https://live.staticflickr.com/65535/53773148907_208189c9d9_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 7,
      nome: "Rolls Royce Phantom",
      foto: "https://live.staticflickr.com/65535/53774485985_a7a59426c3_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 8,
      nome: "Audi RS6 Avant",
      foto: "https://live.staticflickr.com/65535/53774069291_34e54b39aa_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 9,
      nome: "BMW X6 2020",
      foto: "https://live.staticflickr.com/65535/53774486305_844a6f113f_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 10,
      nome: "Land Rover Velar 2021",
      foto: "https://live.staticflickr.com/65535/53774069281_ae2ef02bd6_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
    {
      id: 11,
      nome: "Mercedes Benz S580 2021",
      foto: "https://live.staticflickr.com/65535/53774486300_f65cbf2e53_o.png",
      transmissao: "Automático de 7 velocidades",
      consumo: "5 km/l (cidade) / 7 km/l (estrada)",
      passageiros: "5 pessoas",
      volume_porta_malas: "540 litros",
      combustivel: "52 litros",
    },
  ];

  const carro = carros.find((car) => car.id === parseInt(id));

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mb-[-5%]">
      {carro ? (
        <div className="flex justify-around items-center gap-10 mt-[-10%] w-[70%] bg-[#B68322] rounded-lg px-12">
          <img className="w-[50%]" src={carro.foto} />
          <div id="listaCarro">
          <h1 className="text-white text-[1.5rem] mb-4">{carro.nome}</h1>
          <ul className="text-white list-none text-[1.2rem]">
            <li>{carro.transmissao}</li>
            <li>{carro.consumo}</li>
            <li>Tanque de {carro.combustivel}</li>
            <li>Porta Malas de {carro.volume_porta_malas}</li>
            <li>Capacidade de {carro.passageiros}</li>
          </ul>
          </div>
        </div>
        
      ) : (
        <p>Carro não encontrado.</p>
      )}

      <div id="alugar" className="w-[500px] bg-[#B68322] mt-10 p-5 flex flex-col rounded-lg ">
        <p className="text-[1.5rem] font-bold text-white">R$ 240,00/Diária</p>
    <Link to={"/pagamento"} className="m-2 text-white bg-[#123A08] hover:bg-[#2d802d] transition duration-300 p-2 rounded-lg">Alugar agora</Link>
      </div>
    </div>
    
  );
};
export default InfoCar;
