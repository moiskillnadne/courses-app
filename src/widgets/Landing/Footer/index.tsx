import "./style.css"

export const LandingFooter = () => {
  return (
    <div className="footer-layout">
      <div className="footer-section-1">Какие то данные из секции один</div>
      <div className="footer-section-2 common-style-for-footer-links ">
        <div>
          <a href="">О преподавателе</a>
        </div>
        <div>
          <a href="">Поддержка на курсе</a>
        </div>
        <div>
          <a href="">Трудоустройство</a>
        </div>
      </div>
      <div className="footer-section-3 common-style-for-footer-links ">
        <div>
          <a href="">Из чего состоит курс</a>
        </div>
        <div>
          <a href="">Блоки курса</a>
        </div>
        <div>
          <a href="">Тарифы</a>
        </div>
      </div>
      <div className="footer-section-4">Какие то данные из секции четыре</div>
      <div className="footer-section-5">Какие то данные из секции пять</div>
    </div>
  )
}
