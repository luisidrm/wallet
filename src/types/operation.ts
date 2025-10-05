export interface Operation{
  id: string,
  created_at: string
  type: TypeOperation
  amount: number
  currency: string
  description: string
}

enum TypeOperation {
  withdrawal = "withdrawal",
  payment = "payment",
  invoice = "invoice",
  deposit = "deposit",

}