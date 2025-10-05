import { CreditCard } from "lucide-react";
import CurrencyAtom from "../atoms/CurrencyAtom";

type Props ={
  currency:string
}

export default function CurrencyMolecule({currency}:Props){
  return (
    <div className="flex px-4 justify-between">
      <CurrencyAtom currency={currency}/>
      <CreditCard className="text-gray-400" size={24} />
    </div>  
  )
}