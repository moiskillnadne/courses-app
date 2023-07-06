import { MacosBox } from "~/shared/ui"

import "./style.css"

export const LandingResult = () => {
  return (
    <div className="result-block-wrapper">
      <div>
        <MacosBox>
          <div className="result-block-content-wrapper">
            <div>
              <h2>результат курса</h2>
            </div>
            <div className="result-block-content">
              <div className="result-list">все что угодно</div>
            </div>
          </div>
        </MacosBox>
      </div>
    </div>
  )
}
