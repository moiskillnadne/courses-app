import { Button } from "../../../shared/ui"
import { THEME } from "../../../shared/utils"
import "./style.css"

export const LandingFooter = () => {
  return (
    <div className="footer-layout">
      <div className="footer-section-1">
        <div>
          <img src="" alt="Logo" />
        </div>
        <div>
          <p>Created by Viktor Riabkov</p>
        </div>
        <div>
          <p>2023</p>
        </div>
      </div>
      <div className="footer-section-2 common-style-for-footer-links ">
        <div>
          <a href="#teacher">О преподавателе</a>
        </div>
        <div>
          <a href="#support">Поддержка на курсе</a>
        </div>
        <div>
          <a href="#employment">Трудоустройство</a>
        </div>
      </div>
      <div className="footer-section-3 common-style-for-footer-links ">
        <div>
          <a href="#course-contain">Из чего состоит курс</a>
        </div>
        <div>
          <a href="#course-structure">Блоки курса</a>
        </div>
        <div>
          <a href="#rates">Тарифы</a>
        </div>
      </div>
      <div className="footer-section-4"></div>
      <div className="footer-section-5">
        <Button
          backgroundColor={THEME.color.purple}
          color={THEME.color.white}
          onClick={() => {
            window.location.href = "#landing-header"
          }}>
          К началу
        </Button>
      </div>
    </div>
  )
}
