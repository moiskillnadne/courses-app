import classNames from "classnames"
import "./style.css"

export const LandingTargetAudience = () => {
  return (
    <div className="target-audience">
      <div className="target-audience-header">
        <h1>Для кого этот курс</h1>
      </div>
      <div className="target-audience-content">
        <div className={classNames("target-audience-content-item", "item-1", "audience-description-card-default")}>
          <h2>Новичок в программировании</h2>
          <p>
            Вы поставили себе цель — научиться программировать и найти работу во фронтэнде, и только делаете первые
            шаги. Тогда этот курс даст вам базу и эффективно проведет вас по пути от HTML/CSS до первой работы
          </p>
        </div>
        <div className={classNames("target-audience-content-item", "item-2", "audience-description-card-default")}>
          <h2>Начинающий фронтендер</h2>
          <p>
            Вы уже какое-то время изучаете программирование, самостоятельно разбираетесь в HTML/CSS или JS. Тогда этот
            курс поможет вам ускорить и упростить свое обучение и быстрее прийти к трудоустройству
          </p>
        </div>
        <div className={classNames("target-audience-content-item", "item-3", "audience-description-card-purple")}>
          <h2>Разбираетесь, но нет работы</h2>
          <p>
            Вы уже знаете базу, даже изучали фреймворки и создавали пет-проекты, но до трудоустройства вам еще далеко.
            Тогда вы можете зайти на курс со 2 ступени и приступить сразу к продвинутым технологиям и блоку по
            трудоустройству
          </p>
        </div>
      </div>
    </div>
  )
}
