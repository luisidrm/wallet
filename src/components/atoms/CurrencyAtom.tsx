type Props ={
  currency: string
}

export default function CurrencyAtom({currency}:Props) {
  return (
    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
      {currency}
    </span>
  )
}