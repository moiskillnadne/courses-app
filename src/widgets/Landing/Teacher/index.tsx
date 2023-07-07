import TeacherPhoto from "~/assets/media/victorryabkov.png"
import { MacosBox } from "~/shared/ui"

import "./style.css"

export const LandingTeacher = () => {
  return (
    <div id="teacher" className="teacher-block">
      <div className="teacher-avatar">
        <div>
          <img src={TeacherPhoto} alt="Viktor Riabkov photo" />
        </div>
      </div>
      <div className="teacher-description">
        <MacosBox>
          <div className="teacher-description-wrapper">
            <div className="teacher-description-title">
              <div>
                <h1>Виктор Рябков</h1>
              </div>
              <div className="teacher-description-label">
                <span>преподаватель курса</span>
              </div>
            </div>
            <div className="teacher-description-content">
              <ul>
                <li>Действующий Senior Fullstack разработчик</li>
                <li>Почти 6 лет в веб-разработки</li>
                <li>Прошел 70+ часов тренингов по собеседованиям</li>
                <li>Лично прошел 50+ собеседований</li>
                <li>Отбирал на работу и курировал 40+ джуниоров</li>
                <li>Живу и путешествую по Европе</li>
                <li>Автор бесплатных курсов на 300+ участников</li>
              </ul>
            </div>
          </div>
        </MacosBox>
      </div>
    </div>
  )
}
