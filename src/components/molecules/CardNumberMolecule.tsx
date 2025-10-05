import CardNumberAtom from "../atoms/CardNumberAtom";

type Props={
  formatCardNumber: (arg0:string)=>string
  cardNumber: string
}

export default function CardNumberMolecule({formatCardNumber, cardNumber}:Props){
  return(
    <div className="mb-4">
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
          Card Number
        </p>
        <CardNumberAtom formatCardNumber={formatCardNumber} cardNumber={cardNumber} />
      </div>
  )
}