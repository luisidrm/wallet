import useApi from "../bussines/logic"
import HistoricCard from "../components/organisms/HistoricCard";
import { operationURL } from "../routes"
import type { Operation } from "../types/operation"

export default function Historic() {
  const { data: operations, error, loading } = useApi<Operation>(`${operationURL}`)


  return (
    <div className="w-[100vw] h-auto bg-green-900">
      {operations?.map(item => (

        <HistoricCard
          key={item.id}
          description={item.description}
          amount={item.amount}
          type={item.type}
          created_at={item.created_at}
          isIncoming={item.type==="deposit"}
        />
      ))}
    </div>
  )
}