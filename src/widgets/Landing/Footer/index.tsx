import OfertaPdf from "~/assets/media/files/Riabkov-oferta.pdf"
import Logo from "~/assets/media/vr-course-logo.png"
import { Button } from "~/shared/ui"
import { THEME } from "~/shared/utils"

import "./style.css"

export const LandingFooter = () => {
  return (
    <div className="footer-layout">
      <div className="footer-section-1">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="contact-information">
          <p>ИП Рябков В. А.</p>
          <p>ИНН 780448416731</p>
          <p>ОГРНИП 322784700075522</p>
        </div>
      </div>
      <div className="footer-section-2 common-style-for-footer-links">
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
      <div className="footer-section-3 common-style-for-footer-links">
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
      <div className="footer-section-5">
        <div>
          <Button
            backgroundColor={THEME.color.purple}
            color={THEME.color.white}
            onClick={() => {
              window.location.href = "#landing-header"
            }}>
            К началу
          </Button>
        </div>

        <div>
          <a href={OfertaPdf} target="_blank" rel="noreferrer">
            Оферта
          </a>
        </div>
      </div>
    </div>
  )
}
