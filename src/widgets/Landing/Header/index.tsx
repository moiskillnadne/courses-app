import { Button } from "~/shared/ui"
import { THEME } from "~/shared/utils"

import "./style.css"

export const LandingHeader = () => {
  return (
    <div id="landing-header" className="header-background-pattern">
      <div className="header-content">
        <div className="header-navbar">
          <Button backgroundColor={THEME.color.green} color="#FFFFFF">
            Курс
          </Button>
        </div>
        <div className="header-title">
          <h1>
            Junior Frontend <br /> разработчик
          </h1>
        </div>
        <div className="header-description">
          <h5>
            с 0 до трудоустройства Junior-ом <br /> за 6 месяцев
          </h5>
        </div>
      </div>
    </div>
  )
}
