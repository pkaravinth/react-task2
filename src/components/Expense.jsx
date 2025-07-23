import React, { useState } from 'react';
import Tracker from './Tracker';
import './Expense.css'


const Expense = () => {
  const [showForm, setShowForm] = useState(false)
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('expense')
  const [transactions, setTransactions] = useState([]);
    
  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setAmount('');
    setDescription('');
    setType('expense');
    setShowForm(false);
  };

  const handleTransactionSubmit = () => {
    if (!amount || !description) {
      alert('Please fill all fields')
      return;
    }

    const transaction = {
      amount: Number(amount),
      description,
      type,
    };

    setTransactions([...transactions, transaction])
    handleCancelClick()
  };

  return (
    <div className="container">
      <div className="module1">
        <h1>Expense Tracker</h1>
        <Tracker transactions={transactions} />

        {!showForm && <button  className='btn1'onClick={handleAddClick}>ADD</button>}

        {showForm && (
          <div className="form">
            <input
              className="amount"type="number" placeholder="Amount"value={amount}onChange={(e) => setAmount(e.target.value)} />
            <input
              className="description" type="text" placeholder="Description"value={description}onChange={(e) => setDescription(e.target.value)} />
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="expense">Expense</option>
              <option value="salary">Salary</option>
            </select>
            <div className="button-group">
              <button className="btn" onClick={handleTransactionSubmit}>Add Transaction</button>
              <button className="btn" onClick={handleCancelClick}> Cancel</button>                                     
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Expense;
