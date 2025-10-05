import type { Operation } from "../types/operation";

export function filterByDateRange(
  operations: Operation[], 
  startDate: Date, 
  endDate: Date
): Operation[] {
  return operations.filter(transaction => {
    const txDate = new Date(transaction.createdAt);
    return txDate >= startDate && txDate <= endDate;
  });
}