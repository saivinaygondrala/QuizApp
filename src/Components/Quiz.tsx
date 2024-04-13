import { useState } from "react";
import Question from "../Components/Question";
import { data } from "../data/data";
import Score from "./Score";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [quesData, setQuesData] = useState(data);

  const computeScore = () => {
    quesData.map((dta) => {
      if (dta.answer === dta.selected) {
        setScore((prev) => prev + 1);
      }
    });
    localStorage.setItem("score",`${score}`);
  };

  return (
    <>
      {!clicked && (
        <div>
          <h1 className="title">Quiz</h1>

          {quesData.map((d, index) => (
            <Question
              key={d?.question}
              question={d?.question}
              options={d?.options}
              answer={d?.answer}
              index={index}
              quesData={quesData}
              setQuesData={setQuesData}
            />
          ))}
          <div className="submit-btn-container">
            <button
              className="submit-btn"
              onClick={() => {
                computeScore();
                setClicked(true);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {clicked &&
      <Score score={score}/>}
    </>
  );
}
