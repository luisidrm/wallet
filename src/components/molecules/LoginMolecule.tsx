import { CreditCard } from "lucide-react";
import TextInput from "../atoms/TextInput";
import PasswordInput from "../atoms/PasswordInput";
import { Button } from "../ui/button";

type Props ={
  user:string
  password:string
  setUser:(arg:string)=>void
  setPassword:(arg:string)=>void
}

export default function LoginMolecule({user,password,setUser, setPassword}:Props){
  return(
    <div className="flex flex-col justify-center place-items-center">
      <CreditCard size={48}/>
      <TextInput placeholder="Nombre de Usuario" value={user} changeFn={setUser} />
      <PasswordInput placeholder="Contraseña" value={password} changeFn={setPassword}/>
      <Button type="button" className="">Login</Button>
    </div>
  )
}