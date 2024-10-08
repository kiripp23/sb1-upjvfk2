import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <div className="mb-4">
        <button className="text-gray-600 font-bold">&lt;</button>
      </div>
      
      <h2 className="text-xl font-bold mb-4">Выбирете метод оплаты</h2>
      
      <div className="space-y-2 mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="SberPay"
            checked={paymentMethod === 'SberPay'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="form-radio"
          />
          <span>SberPay</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="BankCard"
            checked={paymentMethod === 'BankCard'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="form-radio"
          />
          <span>Банковская карта</span>
        </label>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600">Стоимость</p>
        <p className="font-bold">15 000руб.</p>
      </div>
      
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Оплатить
      </button>
    </div>
  );
};

export default Payment;
