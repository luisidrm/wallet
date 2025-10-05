import CardNameAtom from "../atoms/CardNameAtom";
import CardNumberAtom from "../atoms/CardNumberAtom";

type Props={
  formatCardNumber: (arg0:string)=>string
  cardNumber: string
  cardName: string
}

export default function CardNumberLabeled({formatCardNumber,cardName,cardNumber}:Props){
    return (
        <div className="flex-1 min-w-0">
            <CardNameAtom cardName={cardName} />
            <CardNumberAtom formatCardNumber={formatCardNumber} cardNumber={cardNumber}/>
        </div>
    );
}
