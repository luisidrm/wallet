import { number } from "zod";
import type { Account } from "../../types/account";
import BalanceMolecule from "../molecules/BalanceMolecule";
import CardNameMolecule from "../molecules/CardNameMolecule";
import CardNumberMolecule from "../molecules/CardNumberMolecule";
import CurrencyMolecule from "../molecules/CurrencyMolecule";

type Props = {
  account: Account
}

export default function BigCard({ account }: Props) {
  const { formatCardNumber, formatBalance } = useCardFormatter();
  const { currency, cardNumber, cardName, balance } = account;

  function useCardFormatter() {
    const formatCardNumber = (n: string) => {
      const last4 = n.slice(-4);
      return `•••• •••• •••• ${last4}`;
    };

    const formatBalance = (amount: number, currency: string) => {
      try{

        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currency
        }).format(amount);
      }catch(error){
        return `${balance} ${currency} `
      }
      };

    return { formatCardNumber, formatBalance };
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-4 w-96 border border-gray-100">
      <CurrencyMolecule currency={currency} />
      <CardNumberMolecule formatCardNumber={formatCardNumber} cardNumber={cardNumber} />
      <CardNameMolecule cardName={cardName} />
      <BalanceMolecule formatBalance={formatBalance} balance={balance} currency={currency} />
    </div>
  )
}