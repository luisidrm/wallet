import HistoricCard from "./components/organisms/HistoricCard";
import type { Operation } from "./types/operation";

type Props = {
  operation: Operation
}

export default function TransactionItem({ operation }: Props) {
  const { description, amount, created_at, type } = operation;

  const isIncoming = type === 'deposit';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <HistoricCard
        description={description}
        amount={amount}
        type={type}
        created_at={created_at}
        isIncoming={isIncoming} />
    </div>
  );
}