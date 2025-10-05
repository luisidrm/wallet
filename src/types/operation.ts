export interface Operation{
  id: string,
  createdAt: string
  type: TypeOperation
  amount: number
  currency: string
  description: string
}

enum TypeOperation {
  withdrawal = "Withdrawal",
  payment = "Payment",
  invoice = "Invoice",
  deposit = "Deposit",

}