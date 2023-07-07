import classNames from "classnames"

export const CourseStructure = () => {
  return (
    <div className="course-structure-pattern">
      <div className="course-structure">
        <div className="course-structure-title">
          <h1>Блоки курса</h1>
        </div>
        <div className="course-structure-content">
          <div className={classNames("course-block-item", "course-block-item-default-color", "course-block-item-1")}>
            <div>
              <div>
                <h3>Продвинутый HTML / CSS</h3>
              </div>
              <div>
                <ul>
                  <li>Структура HTML документа</li>
                  <li>Тэги</li>
                  <li>Css</li>
                  <li>Работа с формами</li>
                  <li>Адаптивая верстка</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "course-block-item",
              "course-block-item-default-color",
              "course-block-item-2",
              "course-block-git-icon",
            )}>
            <div>
              <div>
                <h3>GIT & Agile</h3>
              </div>
              <div>
                <ul>
                  <li>Установка GIT</li>
                  <li>Создание локального репозитория</li>
                  <li>Создание удаленного репозитория</li>
                  <li>Работа с удаленным репозиторием</li>
                  <li>Работа с ветками</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "course-block-item",
              "course-block-item-default-color",
              "course-block-item-3",
              "course-block-react-icon",
            )}>
            <div>
              <div>
                <h3>React</h3>
              </div>
              <div>
                <ul>
                  <li>Знакомство с фреймворками</li>
                  <li>Установка React</li>
                  <li>Hello world пример</li>
                  <li>Компоненты, хуки</li>
                  <li>Жизненый цикл компонентов</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "course-block-item",
              "course-block-item-default-color",
              "course-block-item-4",
              "course-block-typescript-icon",
            )}>
            <div>
              <div>
                <h3>Typescript</h3>
              </div>
              <div>
                <ul>
                  <li>Знакомство с Typescript</li>
                  <li>Установка Typescript и подключение в проект</li>
                  <li>Типы и интерфейсы</li>
                  <li>Дженерики</li>
                  <li>Enums</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "course-block-item",
              "course-block-item-default-color",
              "course-block-item-5",
              "course-block-javascript-icon",
            )}>
            <div>
              <div>
                <h3>Javascript</h3>
              </div>
              <div>
                <ul>
                  <li>Знакомство с Javascript</li>
                  <li>Работа с Дом деревом</li>
                  <li>Типы, переменные, циклы</li>
                  <li>Event loop</li>
                  <li>Прототипирование, замыкание</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classNames("course-block-item", "course-block-item-green-color", "course-block-item-6")}>
            <div>
              <div>
                <h3>Модуль по трудоустройству</h3>
              </div>
              <div>
                <ul>
                  <li>Структура собеседований</li>
                  <li>Подготовка резюме</li>
                  <li>Советы по поиску вакансий</li>
                  <li>Советы по прохождению собеседований</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
