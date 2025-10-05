import CardNameAtom from "../atoms/CardNameAtom";
import DateAtom from "../atoms/DateAtom";

type Props = {
  type: string
  description: string
  created_at:string
}

export default function HistoricInfo({type, description, created_at}:Props) {
  return (
    <div className="flex-1 min-w-0">
      <CardNameAtom cardName={type} />
      <CardNameAtom cardName={description} />
      <DateAtom date={created_at} />
    </div>
  )
}