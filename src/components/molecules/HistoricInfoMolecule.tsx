import DateAtom from "../atoms/DateAtom";
import DescriptionAtom from "../atoms/DescriptionAtom";
import HistoricTitle from "../atoms/HistoricTitle";

type Props = {
  type: string
  description: string
  created_at: string
}

export default function HistoricInfo({ type, description, created_at }: Props) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex justify-between">
        <HistoricTitle title={type} />
        <DateAtom date={created_at} />
      </div>
      <DescriptionAtom description={description} />
    </div>
  )
}