import React from "react";
import { useState, useEffect } from "react";


const Form = ({ addAccount }) => {
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    addAccount({
      customerName : name,
      accountNumber,
      accountType
    });
    setName('');
    setAccountNumber('');
    setAccountType('');
  }


  return (
    <div className="formHolder">
      <div className="form-box my-5">
        <form className="form" onSubmit={handleSubmit}>
          <span className="title">Account Info</span>
          <span className="text-center">Please Fill Your Account Info</span>
          <div className="form-container">
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              className="input"
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
            <input
              type="text"
              className="input"
              placeholder="Account Type"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            />
          </div>
          <button className="btn-add" type="submit">Add Account</button>
        </form>
      </div>
    </div>
  );
};


function Main(){
  const [accounts, setAccounts] = useState([{
    id: 1,
    customerName:"Israa Othman",
    accountNumber: "123456",
    accountType: "Savings"
  },
  {
    id: 2,
    customerName:"Ahmad Zahran",
    accountNumber: "987654",
    accountType: "Student accounts"
  },
  {
    id: 3,
    customerName:"Saad Zireeni",
    accountNumber: "123456",
    accountType: "Savings"
  },
  {
    id: 4,
    customerName:"khalid",
    accountNumber: "987654",
    accountType: "Student accounts"
  }
]);

const [numberOfAccounts, setNumberOfAccounts] = useState(accounts.length);
  //   const addAccount = (newAccount) => {
  //   setAccounts([...accounts, newAccount]);
  //   setNumberOfAccounts(numberOfAccounts + 1);
  // };


  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
    setNumberOfAccounts(numberOfAccounts + 1);
  };

  function deleteAccount(id) {
    const updatedAccounts = accounts.filter((account) => account.id !== id);
    setAccounts(updatedAccounts);
    setNumberOfAccounts(updatedAccounts.length);
  }


  return (
    <div className='container mt-5 text-center'>
      <h2 className='text-center mb-4'>Customers Bank Accounts</h2>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <Form addAccount={addAccount} />
        </div>
      </div>
 
      <div className='row'>
          <div className='card-container d-flex justify-content-center flex-wrap'>
            {accounts.length ? (
              accounts.map((account) => (
                <div className='card mb-4 mx-2' key={account.id}>
                  <div className='card-header'>{account.customerName}</div>
                  <div className='card-body'>
                    <p className='card-text'>Account Number: {account.accountNumber}</p>
                    <p className='card-text'>Account Type: {account.accountType}</p>
                    <button
                      className='btn btn-danger d-flex mx-auto mt-3'
                      onClick={() => deleteAccount(account.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No accounts found</p>
            )}
          </div>
      </div>
    </div>
  );
}

export default Main;
