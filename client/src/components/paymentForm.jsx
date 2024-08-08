import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/mpesa/stkpush', { phone, amount });
           
        } catch (error) {
            
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4"></h2>
            <form onSubmit={handleSubmit} className="bg-blue-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter phone number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        type="text"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter amount"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
