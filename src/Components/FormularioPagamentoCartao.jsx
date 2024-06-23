import React from 'react';

const FormularioPagamentoCartao = ({ formData, errors, handleCardNumberChange, handleChange, handleExpiryDateChange }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl mb-2 mt-2">Pagamento via cartão</h2>
            <div>
                <label htmlFor="cardNumber" className="block mb-2">Número do Cartão</label>
                <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-[350px] p-2 border border-gray-300 rounded-md"
                    maxLength="19"
                />
                {errors.cardNumber && <p className="text-white">{errors.cardNumber}</p>}
            </div>
            <div>
                <label htmlFor="nameOnCard" className="block mb-2">Nome no Cartão</label>
                <input
                    type="text"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleChange}
                    placeholder="Nome Completo"
                    className="w-[350px] p-2 border border-gray-300 rounded-md"
                />
                {errors.nameOnCard && <p className="text-white">{errors.nameOnCard}</p>}
            </div>
            <div>
                <label htmlFor="expiryDate" className="block mb-2">Data de Expiração</label>
                <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleExpiryDateChange}
                    placeholder="MM/AA"
                    className="w-[350px] p-2 border border-gray-300 rounded-md"
                    maxLength="5"
                />
                {errors.expiryDate && <p className="text-white">{errors.expiryDate}</p>}
            </div>
            <div>
                <label htmlFor="cvv" className="block mb-2">CVV</label>
                <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    className="w-[350px] p-2 border border-gray-300 rounded-md"
                    maxLength="3"
                />
                {errors.cvv && <p className="text-white">{errors.cvv}</p>}
            </div>
        </div>
    );
};

export default FormularioPagamentoCartao;
