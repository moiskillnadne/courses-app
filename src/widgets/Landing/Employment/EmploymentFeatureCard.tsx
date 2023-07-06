import "./style.css"

type Props = {
  index: number
  icon: string
  text: string
  secondaryText?: string

  backgroundColor: string
  borderColor: string
  color?: string
}

export const EmploymentFeatureCard = (props: Props) => {
  return (
    <div className="employment-feature-item">
      <div className="feature-item-number">{`${props.index}.`}</div>
      <div
        className="feature-item-card"
        style={{
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          color: props.color ? props.color : "black",
        }}>
        <div className="feature-item-card-icon">
          <img src={props.icon} alt="Passport icon" />
        </div>
        <div>
          <h2>{props.text}</h2>
          {props.secondaryText && <p>{props.secondaryText}</p>}
        </div>
      </div>
    </div>
  )
}
