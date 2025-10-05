import { useState } from "react";
import BigCard from "../components/organisms/BigCard";
import type { Account } from "../types/account";

export default function Dashboard(){
  const [account, setAccount] = useState<Account>()

  return(
    <div className="w-[100vw] h-[100dvh] flex flex-col ">
      {account&&<BigCard account={account}/>}
    </div>
  )
}