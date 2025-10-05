import AmountMolecule from "../molecules/AmountMolecule";
import HistoricInfo from "../molecules/HistoricInfoMolecule";

type Props = {
  description: string
  amount: number
  type: string
  created_at: string
  isIncoming: boolean
}

export default function HistoricCard({ description, amount, type, created_at, isIncoming }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <HistoricInfo type={type} description={description} created_at={created_at} />
        <AmountMolecule isIncoming={isIncoming} amount={amount} />
      </div>
    </div>
  )
}