import CardNameAtom from "../atoms/CardNameAtom";

type Props = {
  cardName: string
}
export default function CardNameMolecule({ cardName }: Props) {
  return (
    <div className="mb-6">
      <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
        Card Holder
      </p>
      <CardNameAtom cardName={cardName}/>
    </div>
  )
}