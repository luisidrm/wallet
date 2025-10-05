import type { Account } from "../../types/account";
import CurrencyAtom from "../atoms/CurrencyAtom";
import CardNumberLabeled from "../molecules/CardNumberLabeled";
import { Button } from "../ui/button";

type Props = {
  account: Account
  setAccount: (arg: Account) => void
}

export default function CompactAccountCard({ account, setAccount }: Props) {
  const { cardName, cardNumber, currency } = account;

  const formatCardNumber = (n: string) => {
    const last4 = n.slice(-4);
    return `•••• •••• •••• ${last4}`;
  };


  return (
    <button type="button"
      onClick={() => setAccount(account)}
      className="w-[98%] bg-white p-4 rounded-lg shadow-lg border-2 gap-8 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all text-left"
    >
      <div className="flex items-center justify-between bg-white">
        <CardNumberLabeled formatCardNumber={formatCardNumber} cardName={cardName} cardNumber={cardNumber} />
        <CurrencyAtom currency={currency} />
      </div>
    </button>
  );
}
