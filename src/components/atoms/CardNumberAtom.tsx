type Props={
  formatCardNumber: (arg0:string)=>string
  cardNumber: string
}

export default function CardNumberAtom({formatCardNumber, cardNumber}:Props) {
  return(
    <p className="text-gray-800 text-lg font-mono tracking-wider">
    {formatCardNumber(cardNumber)}
  </p>
  )
}