import { Button } from "~/shared/ui"
import { THEME } from "~/shared/utils"

import "./style.css"

export const ApplyButton = () => {
  const onApplyClick = () => {
    return window.open("https://t.me/ryabkov_support_bot", "_blank")
  }

  return (
    <div className="apply-to-course">
      <Button
        onClick={onApplyClick}
        padding="15px 125px"
        fontSize="18px"
        backgroundColor={THEME.color.purple}
        color={THEME.color.white}>
        Записаться
      </Button>
    </div>
  )
}
