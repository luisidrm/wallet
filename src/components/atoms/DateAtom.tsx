type Props = {
  date: string
}

export default function DateAtom({ date }: Props) {
  return (
    <p className="text-gray-800 text-sm font-thin font-mono tracking-wider">
      {date}
    </p>
  )
}