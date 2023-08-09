

import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './App.css';

const App = () => {
  const publicKey = "pk_test_acee5ea631334f9889d35db007d7c3e3fb3562e2";
  const amount = 100000;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    currency: 'GHS',
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Buy Now',
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src="https://images.unsplash.com/photo-1534437088728-1e8db7fcef94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHNuZWFrZXIlMjBuaWtlfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="product"
          />
          <div className="item-details">
            <p className="item-details__title">Nike Sneakers</p>
            {/* <p className="item-details__amount">GHS  {amount / 100}</p> */}
            <p className="item-details__amount">GHS 1000 </p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;



