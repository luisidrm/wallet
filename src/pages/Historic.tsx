import { useEffect, useState } from "react";
import type { Operation } from "../types/operation";
import { operationURL } from "../routes";
import useApi from "../bussines/logic";
import HistoricCard from "../components/organisms/HistoricCard";

export default function Historic() {
  const [allTransactions, setAllTransactions] = useState<Operation[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Operation[]>([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { data, loading, error } = useApi<Operation>(`${operationURL}`);

  useEffect(() => {
    if (data) {
      setAllTransactions(data);
      setFilteredTransactions(data);
    }
  }, [data]);

  const filterByDate = (start: string, end: string, transactions: Operation[]) => {
    if (!start || !end) return transactions;

    const startDateTime = new Date(start).getTime();
    const endDateTime = new Date(end).getTime();

    return transactions.filter(transaction => {
      const txDate = new Date(transaction.createdAt).getTime();
      return txDate >= startDateTime && txDate <= endDateTime;
    });
  };

  const handleApplyFilter = () => {
    const filtered = filterByDate(startDate, endDate, allTransactions);
    setFilteredTransactions(filtered);
    setIsFilterApplied(true);
  };

  const handleClearFilter = () => {
    setFilteredTransactions(allTransactions);
    setIsFilterApplied(false);
    setStartDate('');
    setEndDate('');
  };

  const displayTransactions = isFilterApplied ? filteredTransactions : allTransactions;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8 bg-green-600">
      <h1 className="text-3xl font-bold mb-6">Transaction History</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="md:flex block gap-4 items-end">
          <div className="flex-1 " >
            <label htmlFor="esomismo" className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              name="esomismo"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border stroke-blue-400 bg-slate-300 border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="eso" className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              name="eso"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2  bg-slate-300"
            />
          </div>

          <button
            type="button"
            onClick={handleApplyFilter}
            disabled={!startDate || !endDate}
            className="bg-blue-600 text-white mt-2 px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Apply Filter
          </button>

          {isFilterApplied && (
            <button
              type="button"
              onClick={handleClearFilter}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Clear Filter
            </button>
          )}
        </div>

        {isFilterApplied && (
          <p className="text-sm text-gray-600 mt-3">
            Showing {filteredTransactions.length} of {allTransactions.length} transactions
          </p>
        )}
      </div>

      <div className="space-y-2 grid md:grid-cols-2 grid-cols-1 gap-4">
        {displayTransactions.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No transactions found</p>
        ) : (
          displayTransactions.map(transaction => (
            <HistoricCard key={transaction.id}
              description={transaction.description}
              amount={transaction.amount}
              type={transaction.type}
              created_at={transaction.createdAt}
              isIncoming={transaction.type === "deposit"}

            />
          ))
        )}
      </div>
    </div>
  );
}