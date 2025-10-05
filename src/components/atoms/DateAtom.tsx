type Props = {
  date: string
}

export default function DateAtom({ date }: Props) {
  return (
    <p className="text-gray-800 text-sm font-medium tracking-wider">
      {date.split("T")[0]}
    </p>
  )
}