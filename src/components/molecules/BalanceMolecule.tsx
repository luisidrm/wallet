import BalanceAtom from "../atoms/BalanceAtom"

type Props ={
  formatBalance: (arg0:number,arg1:string)=>string
  balance: number
  currency: string
}

export default function BalanceMolecule({formatBalance, balance, currency}:Props){
  return(
          <div className="pt-4 border-t border-gray-200">
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
          Available Balance
        </p>
        <BalanceAtom formatBalance={formatBalance} balance={balance} currency={currency}/>
      </div>
  )
}