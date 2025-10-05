import { Input } from "../ui/input";

type TextInput={
  placeholder: string
  value?: string
  changeFn:(arg:string)=>void
}

export default function TextInput({placeholder, value, changeFn }:TextInput){
  return(
    <Input type="text" placeholder={placeholder} value={value} onChange={(val:string)=>changeFn(val)} />
  )
}