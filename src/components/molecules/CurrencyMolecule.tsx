import { CreditCard } from "lucide-react";
import CurrencyAtom from "../atoms/CurrencyAtom";

type Props ={
  currency:string
}

export default function CurrencyMolecule({currency}:Props){
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-96 border border-gray-100">
      <CurrencyAtom currency={currency}/>
      <CreditCard className="text-gray-400" size={24} />
    </div>  
  )
}