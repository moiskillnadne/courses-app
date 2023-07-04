type Props = {
  size?: string
}

export const Divider = ({ size }: Props) => {
  return <div style={{ width: "100%", height: size }} />
}
