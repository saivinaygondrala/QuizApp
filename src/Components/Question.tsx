import "../styles/Question.css";
import { QuestionType } from "../data/data";
export default function Question({
  question,
  options,
  index,
  quesData,
  setQuesData,
}: {
  question: string;
  options: string[];
  answer: string;
  index: number;
  quesData: QuestionType[];
  setQuesData: (e: QuestionType[]) => void;
}) {
  return (
    <>
      <div className="question-container">
        <h2 className="question">{question}</h2>
        <select
          name="options"
          id="options"
          className="dropdown"
          onChange={(e) => {
            const updated = [...quesData]; 
            updated[index] = { ...updated[index], selected: e.target.value }; 
            setQuesData(updated); 
          }}
        >
          {options.map((option: string) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
