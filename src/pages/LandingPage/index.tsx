import { ApplyButton } from "~/feature/ApplyToCourse"
import { Divider } from "~/shared/ui"
import {
  LandingHeader,
  LandingTargetAudience,
  LandingTeacher,
  LandingWhatCourseContain,
  LandingSupport,
  LandingEmployment,
  LandingRates,
  LandingQuestions,
  LandingFooter,
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
      <Divider size="100px" />
      <LandingEmployment />
      <Divider size="100px" />
      <ApplyButton />
      <Divider size="100px" />
      <LandingRates />
      <ApplyButton />
      <LandingQuestions />
      <LandingFooter />
      <Divider size="100px" />
    </div>
  )
}
