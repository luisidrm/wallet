type Props = {
  cardName: string
}

export default function CardNameAtom({ cardName }: Props) {
  return (
    <p className="text-gray-800 text-base font-medium">
      {cardName}
    </p>
  )
}