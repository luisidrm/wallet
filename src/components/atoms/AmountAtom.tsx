type Props = {
  isIncoming: boolean
  amount: number
}

export default function AmountAtom({ isIncoming, amount }: Props) {
  return (
    <p className={`text-base font-bold ${isIncoming ? 'text-green-600' : 'text-red-600'}`}>
      {isIncoming ? '+' : '-'} ${amount}
    </p>
  )
}
