import React from 'react';
import './Expense.css'

const Tracker = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'salary')
    .reduce((acc, t) => acc + Number(t.amount), 0)
  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + Number(t.amount), 0)
  const balance = totalIncome - totalExpense
  return (
    <div className="tracker">
      <div className="summary">
        <h3>Balance: ${balance}</h3>
        <h3>Total Income: ${totalIncome}</h3>
        <h3>Total Expense: ${totalExpense}</h3>
      </div>
      <h4>Transactions:</h4>
      <ul>
        {transactions.map((t, index) => (
          <li key={index} className={t.type}>
            {t.description} - ${t.amount} ({t.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracker;
