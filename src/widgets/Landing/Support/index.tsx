import classNames from "classnames"

import ProgrammerIcon from "~/assets/media/icons/svg/free-icon-programmer.svg"
import SupportIcon from "~/assets/media/icons/svg/script-social-care.svg"

import "./style.css"

export const LandingSupport = () => {
  return (
    <div className="support">
      <div className="support-title-block">
        <h1>Поддержка на курсе</h1>
      </div>

      <div className="support-content">
        <div className={classNames("support-content-item", "support-item-1")}>
          <div>
            <h2>Менеджер заботы</h2>
            <p>помогает открыть все доступы, разобраться с оплатой и напоминает о соблюдении дедлайнов</p>
          </div>
          <div className="support-item-image">
            <div>
              <img src={SupportIcon} alt="Social care" />
            </div>
          </div>
        </div>
        <div className={classNames("support-content-item", "support-item-2")}>
          <div>
            <h2>Личный ментор</h2>
            <p>5 пет-проектов на разных технологиях</p>
          </div>
          <div className="support-item-image">
            <div>
              <img src={ProgrammerIcon} alt="Programmer icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
