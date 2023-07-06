import { EmploymentFeatureCard } from "./EmploymentFeatureCard"

import DocumentIcon from "~/assets/media/icons/png/document.png"
import HandsDealIcon from "~/assets/media/icons/png/hands-deal.png"
import PassportIcon from "~/assets/media/icons/png/passport.png"
import TwoPresonIcon from "~/assets/media/icons/png/two-person-split.png"
import { Divider } from "~/shared/ui"
import { THEME } from "~/shared/utils"

import "./style.css"

export const LandingEmployment = () => {
  return (
    <div className="employment">
      <div className="employment-title-wrapper">
        <div>
          <h1>Трудоустройство</h1>
        </div>
        <div>
          <p>
            Сопровождение трудоустройства — помощь в поиске вакансий, <br /> подготовке и анализу собеседований
          </p>
        </div>
      </div>

      <Divider size="50px" />

      <div className="employment-content-feature-list-wrapper">
        <EmploymentFeatureCard
          index={1}
          icon={PassportIcon}
          text="Уроки по трудоустройству, составлению резюме, подготовке к собеседованиям"
          backgroundColor={THEME.color.white}
          borderColor={THEME.color.purple}
        />
        <EmploymentFeatureCard
          index={2}
          icon={DocumentIcon}
          text="Помощь в составлении резюме"
          backgroundColor={THEME.color.white}
          borderColor={THEME.color.purple}
        />
        <EmploymentFeatureCard
          index={3}
          icon={TwoPresonIcon}
          text="Симуляционные собеседования"
          backgroundColor={THEME.color.white}
          borderColor={THEME.color.purple}
        />
        <EmploymentFeatureCard
          index={4}
          icon={HandsDealIcon}
          text="Поддержка трудоустройства после выпуска"
          secondaryText="анализ собеседований, помощь в подготовке, составление стратегии откликов"
          backgroundColor={THEME.color.green}
          borderColor={THEME.color.green}
          color={THEME.color.white}
        />
      </div>
    </div>
  )
}
