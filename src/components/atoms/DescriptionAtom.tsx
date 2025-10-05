type Props = {
  description: string
}

export default function DescriptionAtom({ description }: Props) {
  return (
    <p className="text-gray-800 text-start text-sm font-thin">
      {description}
    </p>
  )
}