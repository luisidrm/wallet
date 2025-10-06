import { Input } from "../ui/input";

type TextInput={
  placeholder: string
  value?: string
  changeFn:(arg:string)=>void
}

export default function PasswordInput({placeholder, value, changeFn }:TextInput){
  return(
    <Input className="bg-white" type="password" placeholder={placeholder} value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>changeFn(e.target.value)} />
  )
}