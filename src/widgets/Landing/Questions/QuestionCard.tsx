import { MacosBox } from "../../../shared/ui"
import "./style.css"

type Props = {
  question: string
  answer: string
}

export const QuestionCard = ({ question, answer }: Props) => {
  return (
    <div className="question-card">
      <div className="question-card-header">
        <p>{question}</p>
      </div>
      <div className="question-card-body">
        <MacosBox>
          <div>
            <p>{answer}</p>
          </div>
        </MacosBox>
      </div>
    </div>
  )
}
