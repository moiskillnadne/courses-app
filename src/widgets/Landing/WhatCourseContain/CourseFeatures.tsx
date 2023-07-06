import classNames from "classnames"

import AcceptReject from "~/assets/media/icons/svg/accept-or-reject.svg"
import LikeMan from "~/assets/media/icons/svg/like-emodji.svg"
import ScriptMultiWindow from "~/assets/media/icons/svg/script-multi-window.svg"
import ScriptPlayer from "~/assets/media/icons/svg/script-player.svg"

import "./style.css"

export const CourseFeature = () => {
  return (
    <div className="course-feature">
      <div className={classNames("feature-item", "default-item-color", "feature-item-1")}>
        <div className="feaute-item-icon">
          <div>
            <img src={ScriptPlayer} alt="" />
          </div>
        </div>
        <div className="feature-item-content">
          <h1>Уроки</h1>
          <p>5-10 минутные видео и лайвкод-сессии</p>
        </div>
      </div>
      <div className={classNames("feature-item", "default-item-color", "feature-item-2")}>
        <div className="feaute-item-icon">
          <div>
            <img src={AcceptReject} alt="" />
          </div>
        </div>
        <div className="feature-item-content">
          <h1>Практика</h1>
          <p>тесты и задания после уроков</p>
        </div>
      </div>
      <div className={classNames("feature-item", "default-item-color", "feature-item-3")}>
        <div className="feaute-item-icon">
          <div>
            <img src={LikeMan} alt="" />
          </div>
        </div>
        <div className="feature-item-content">
          <h1>Codereview от ментора</h1>
        </div>
      </div>
      <div className={classNames("feature-item", "default-item-color", "feature-item-4")}>
        <div className="feaute-item-icon">
          <div>
            <img src={ScriptMultiWindow} alt="" />
          </div>
        </div>
        <div className="feature-item-content">
          <h1>Проекты</h1>
          <p>5 пет-проектов на разных технологиях</p>
        </div>
      </div>
      <div className={classNames("feature-item", "green-item-color", "feature-item-5")}>
        <div></div>
        <div className="feature-item-content">
          <h1>Поддержка трудоустройства</h1>
        </div>
      </div>
    </div>
  )
}
