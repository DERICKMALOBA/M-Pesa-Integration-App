import React from 'react';
import PaymentForm from './components/paymentForm.jsx';
// import TransactionsList from './components/TransactionsList';

const App = () => {
    return (
        <div className="container mx-auto p-4">
           
            <PaymentForm />
            {/* <TransactionsList /> */}
        </div>
    );
};

export default App;
