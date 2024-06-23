import React, { useState, useEffect } from 'react';

const Pagamento = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvv: '',
    rentalDate: '',
    returnDate: '',
  });

  const [errors, setErrors] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvv: '',
  });

  const [paymentPreview, setPaymentPreview] = useState(0);

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 '); // Adiciona espaço a cada 4 dígitos

    setFormData((prevData) => ({
      ...prevData,
      cardNumber: formattedValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      cardNumber: '',
    }));
  };

  const handleExpiryDateChange = (e) => {
    const { value } = e.target;
    const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = cleanedValue;

    if (cleanedValue.length > 2) {
      formattedValue = cleanedValue.slice(0, 2) + '/' + cleanedValue.slice(2, 4);
    }

    setFormData((prevData) => ({
      ...prevData,
      expiryDate: formattedValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      expiryDate: '',
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate CVV to be numeric and have a max length of 3
    if (name === 'cvv' && /^[0-9]*$/.test(value)) {
      if (value.length <= 3) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'CVV deve ter no máximo 3 dígitos.',
        }));
      }
    } else if (name === 'nameOnCard') {
      // Validate name on card to accept only letters and spaces
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Nome no cartão deve conter apenas letras.',
        }));
      }
    } else if (name !== 'nameOnCard') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'O campo só aceita números.',
      }));
    }
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculatePaymentPreview = () => {
    const { rentalDate, returnDate } = formData;
    if (rentalDate && returnDate) {
      const rental = new Date(rentalDate);
      const returnD = new Date(returnDate);
      const diffTime = Math.abs(returnD - rental);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const pricePerDay = 240; // Assumindo um preço fixo por dia para exemplo
      setPaymentPreview(diffDays * pricePerDay);
    }
  };

  useEffect(() => {
    calculatePaymentPreview();
  }, [formData.rentalDate, formData.returnDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de validação e envio do formulário
  };

 function mostrarAlerta() {
  alert("Carro alugado com sucesso")
 }
  
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
     
      <form onSubmit={handleSubmit} className='bg-[#B68322] w-[30%] min-h-screen rounded-lg m-2 p-3 mt-6 space-y-4'>
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
        <div>
          <label htmlFor="rentalDate" className="block mb-2">Data de Aluguel</label>
          <input
            type="date"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleDateChange}
            className="w-[350px] p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="returnDate" className="block mb-2">Data de Devolução</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleDateChange}
            className="w-[350px] p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2">Prévia do Pagamento</label>
          <p className="w-[350px] p-2 ml-4 border border-gray-300 rounded-md bg-white text-black">
            R$ {paymentPreview}
          </p>
        </div>
        <button onClick={mostrarAlerta} type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Confirmar Pedido</button>
      </form>
    </div>
  );
};

export default Pagamento;