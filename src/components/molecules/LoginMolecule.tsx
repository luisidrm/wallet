import TextInput from "../atoms/TextInput";
import PasswordInput from "../atoms/PasswordInput";
import { Button } from "../ui/button";
import BigCard from "../organisms/BigCard";

type Props ={
  user:string
  password:string
  setUser:(arg:string)=>void
  setPassword:(arg:string)=>void
}

export default function LoginMolecule({user,password,setUser, setPassword}:Props){
  return(
    <div className="flex flex-col gap-2 justify-center place-items-center">
      <BigCard 
        account={{
          id:"1",
          cardName:"My Wallet",
          cardNumber:"00000000000000",
        balance:0,
      currency:"USD"}}
      />
      <TextInput placeholder="Nombre de Usuario" value={user} changeFn={setUser} />
      <PasswordInput placeholder="Contraseña" value={password} changeFn={setPassword}/>
      <Button type="button" className="w-full mt-2">Login</Button>
    </div>
  )
}