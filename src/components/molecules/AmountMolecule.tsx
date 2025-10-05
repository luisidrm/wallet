import AmountAtom from "../atoms/AmountAtom"

type Props = {
  isIncoming: boolean
  amount: number
}

export default function AmountMolecule({ isIncoming, amount }: Props) {
  return (
    <div className="ml-4 text-right">
      <AmountAtom isIncoming={isIncoming} amount={amount}/>
    </div>
  )
}
