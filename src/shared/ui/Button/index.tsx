import { PropsWithChildren } from "react"

import "./style.css"
import classNames from "classnames"

type Props = PropsWithChildren<{
  onClick?: () => void

  backgroundColor?: string
  color?: string
  padding?: string
  fontSize?: string

  variant?: "primary" | "secondary" | "info" | "success" | "warning" | "danger"
}>

export const Button = ({ children, onClick, backgroundColor, color, padding, fontSize }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames("default-button")}
      style={{ backgroundColor, color, padding, fontSize }}>
      {children}
    </button>
  )
}
