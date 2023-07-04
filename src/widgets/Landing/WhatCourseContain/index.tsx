import { CourseFeature } from "./CourseFeatures"
import { CourseStructure } from "./CourseStructure"

import { Divider, MacosBox } from "~/shared/ui"

export const LandingWhatCourseContain = () => {
  return (
    <MacosBox>
      <div>
        <h1>из чего курс состоит</h1>
      </div>
      <CourseFeature />
      <Divider size="150px" />
      <CourseStructure />
      <Divider size="50px" />
    </MacosBox>
  )
}
