import { useState } from "react";
import BigCard from "../components/organisms/BigCard";
import type { Account } from "../types/account";
import useApi from "../bussines/logic";
import { accountURL } from "../routes";
import CompactAccountCard from "../components/organisms/CompactAccountCard";

export default function Dashboard() {
  const { data: accounts, error, loading } = useApi<Account>(`${accountURL}`)

  const [account, setAccount] = useState<Account>(accounts ? accounts[0] : {
    id: "1",
    cardName: "Hola Mundo",
    cardNumber: "0000000000000000",
    currency: "USD",
    balance: 0,
  })

  if (!accounts) {
    return <div>Error: You dont have accounts</div>
  }


  return (
    <div className="w-[100vw] h-auto bg-green-900">
      <h1 className="w-full flex justify-center text-center text-xl text-white mb-2">My Accounts</h1>
      <div className="w-full flex justify-center">
        {account && <BigCard account={account} />}
      </div>
      <div className="flex justify-start text-md px-6">
        <h1 className="text-md text-center text-slate-50">Mis Tarjetas:</h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 p-6 gap-4">
        {accounts.map(item => (
          <CompactAccountCard key={item.id} account={item} setAccount={setAccount} />
        ))
        }
      </div>

    </div>
  )
}