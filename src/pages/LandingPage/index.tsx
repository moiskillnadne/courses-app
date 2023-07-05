import { ApplyButton } from "~/feature/ApplyToCourse"
import { Divider } from "~/shared/ui"
import {
  LandingHeader,
  LandingTargetAudience,
  LandingTeacher,
  LandingWhatCourseContain,
  LandingSupport,
} from "~/widgets/Landing"

export const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <Divider size="50px" />
      <LandingTargetAudience />
      <Divider size="100px" />
      <LandingTeacher />
      <Divider size="100px" />
      <LandingWhatCourseContain />
      <ApplyButton />
      <LandingSupport />
    </div>
  )
}
