export interface Operation{
  id: string,
  createdAt: string
  type: TypeOperation
  amount: number
  currency: string
  description: string
}

export const TypeOperation = {
  withdrawal: "Withdrawal",
  payment: "Payment",
  invoice: "Invoice",
  deposit: "Deposit",
} as const

export type TypeOperation = keyof typeof TypeOperation