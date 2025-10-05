import { useState } from "react";
import LoginMolecule from "../molecules/LoginMolecule";

export default function LoginOrganism(){
  const [user, setUser]=useState<string>("")
  const [password, setPassword]=useState<string>("")

  return(
    <div className="flex flex-col justify-center place-items-center space-y-4 p-8 w-[400px] h-auto">
      <LoginMolecule 
        user={user} 
        password={password}
        setUser={setUser}
        setPassword={setPassword}
      />
    </div>
  )
}