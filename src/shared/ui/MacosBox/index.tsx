import { PropsWithChildren } from "react"

import "./style.css"

type Props = PropsWithChildren<{
  width?: string
  height?: string
}>

export const MacosBox = ({ children, width, height }: Props) => {
  return (
    <div className="macos-layout" style={{ width, height }}>
      <div className="circles-bar">
        <span className="circle circle-red" />
        <span className="circle circle-yellow" />
        <span className="circle circle-green" />
      </div>

      {children}
    </div>
  )
}
