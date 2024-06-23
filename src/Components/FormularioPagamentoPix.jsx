import React, { useState } from 'react';
import qrcode1 from "../img/qrcode-pix1.png"
import qrcode2 from "../img/qrcode-pix2.png"
import qrcode3 from "../img/qrcode-pix3.png"

const FormularioPagamentoPix = ({ formData, errors, handleChange }) => {
    const [imagensPix] = useState([
        qrcode1,
        qrcode2,
        qrcode3,
    ]);

    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    // Função para escolher uma imagem aleatória do array de imagens
    const selecionarImagemAleatoria = () => {
        const indiceAleatorio = Math.floor(Math.random() * imagensPix.length);
        setImagemSelecionada(imagensPix[indiceAleatorio]);
    };

    // Chamada para selecionar uma imagem aleatória ao renderizar o componente
    useState(() => {
        selecionarImagemAleatoria();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl mb-2 mt-2">Pagamento via Pix</h2>
            {imagemSelecionada && (
                <img
                    src={imagemSelecionada}
                    alt="Imagem Pix"
                    className="w-72 rounded-lg mb-4"
                />
            )}

        </div>
    );
};

export default FormularioPagamentoPix;
