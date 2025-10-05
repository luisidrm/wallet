type Props = {
  title: string
}

export default function HistoricTitle({ title}: Props) {
  return (
    <p className="text-gray-800 text-start pl-2 font-semibold">
      {title}
    </p>
  )
}