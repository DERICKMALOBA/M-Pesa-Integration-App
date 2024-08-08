// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TransactionsList = () => {
//     const [transactions, setTransactions] = useState([]);

//     useEffect(() => {
//         const fetchTransactions = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/transactions');
//                 setTransactions(response.data);
//             } catch (error) {
//                 console.error('Error fetching transactions:', error.response ? error.response.data : error.message);
//             }
//         };
//         fetchTransactions();
//     }, []);

//     return (
//         <div className="max-w-4xl mx-auto mt-10">
//             <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2">Phone Number</th>
//                         <th className="py-2">Amount</th>
//                         <th className="py-2">Date</th>
//                         <th className="py-2">Receipt Number</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {transactions.map((transaction) => (
//                         <tr key={transaction.MerchantRequestID}>
//                             <td className="py-2">{transaction.PhoneNumber}</td>
//                             <td className="py-2">{transaction.Amount}</td>
//                             <td className="py-2">{transaction.TransactionDate}</td>
//                             <td className="py-2">{transaction.MpesaReceiptNumber}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TransactionsList;
