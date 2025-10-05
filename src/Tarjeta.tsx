import React, { useState, useEffect } from 'react';
import { CreditCard } from 'lucide-react';

// Custom hook for fetching account data


// Custom hook for formatting


// Pure presentational component
function BankAccountCard({ account }) {
  const { formatCardNumber, formatBalance } = useCardFormatter();
  const { currency, cardNumber, cardName, balance } = account;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-96 border border-gray-100">
      {/* Currency badge */}
      <div className="flex justify-between items-start mb-6">
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {currency}
        </span>
        <CreditCard className="text-gray-400" size={24} />
      </div>
      
      {/* Card number */}
      <div className="mb-4">
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
          Card Number
        </p>
        <p className="text-gray-800 text-lg font-mono tracking-wider">
          {formatCardNumber(cardNumber)}
        </p>
      </div>
      
      {/* Card name */}
      <div className="mb-6">
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
          Card Holder
        </p>
        <p className="text-gray-800 text-base font-medium">
          {cardName}
        </p>
      </div>
      
      {/* Balance */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
          Available Balance
        </p>
        <p className="text-gray-900 text-2xl font-bold">
          {formatBalance(balance, currency)}
        </p>
      </div>
    </div>
  );
}

// Container component that handles data fetching
function BankCardContainer({ accountId }) {
  const { account, loading, error } = useAccountData(accountId);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 border border-gray-100 h-80 flex items-center justify-center">
        <p className="text-gray-500">Loading account...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 border border-red-200">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!account) {
    return null;
  }

  return <BankAccountCard account={account} />;
}

// Example usage
export default function App() {
  // Example 1: Static data (no API call)
  const staticAccount = {
    currency: 'USD',
    cardNumber: '4532015112830366',
    cardName: 'John Smith',
    balance: 12345.67
  };

  // Example 2: Multiple static accounts
  const accounts = [
    { id: 1, currency: 'USD', cardNumber: '4532015112830366', cardName: 'John Smith', balance: 12345.67 },
    { id: 2, currency: 'EUR', cardNumber: '5425233430109903', cardName: 'Jane Doe', balance: 8420.50 },
    { id: 3, currency: 'GBP', cardNumber: '2223000048410010', cardName: 'Bob Johnson', balance: 5678.90 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">My Bank Accounts</h1>
        
        {/* Multiple cards with static data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accounts.map(account => (
            <BankAccountCard key={account.id} account={account} />
          ))}
        </div>

        {/* Example with API loading */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Card with API Loading</h2>
        <BankCardContainer accountId={1} />
      </div>
    </div>
  );
}