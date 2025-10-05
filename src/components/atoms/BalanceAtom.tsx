type Props ={
  formatBalance: (arg0:number,arg1:string)=>string
  balance: number
  currency: string
}

export default function BalanceAtom({formatBalance, balance, currency}:Props){
  return(
            <p className="text-gray-900 text-2xl font-bold">
          {formatBalance(balance, currency)}
        </p>
  )
}