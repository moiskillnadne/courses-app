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
              <h3>Продвинутый HTML / CSS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero autem omnis et recusandae sequi fugit
                nulla quis iure rerum repudiandae commodi nostrum, ducimus animi optio? Iusto aspernatur ea veniam.
              </p>
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
              <h3>GIT & Agile</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero autem omnis et recusandae sequi fugit
                nulla quis iure rerum repudiandae commodi nostrum, ducimus animi optio? Iusto aspernatur ea veniam.
              </p>
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
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero autem omnis et recusandae sequi fugit
                nulla quis iure rerum repudiandae commodi nostrum, ducimus animi optio? Iusto aspernatur ea veniam.
              </p>
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
              <h3>Typescript</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero autem omnis et recusandae sequi fugit
                nulla quis iure rerum repudiandae commodi nostrum, ducimus animi optio? Iusto aspernatur ea veniam.
              </p>
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
              <h3>Javascript</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero autem omnis et recusandae sequi fugit
                nulla quis iure rerum repudiandae commodi nostrum, ducimus animi optio? Iusto aspernatur ea veniam.
              </p>
            </div>
          </div>
          <div className={classNames("course-block-item", "course-block-item-green-color", "course-block-item-6")}>
            <div>
              <h3>Модуль по трудоустройству</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero autem omnis et recusandae sequi fugit
                nulla quis iure rerum repudiandae commodi nostrum, ducimus animi optio? Iusto aspernatur ea veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
