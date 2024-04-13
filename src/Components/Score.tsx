import "../styles/Score.css";
export default function Score({ score }: { score: number }) {
  return (
    <div className="score-card">
      <h2 className="score-heading">Your Score</h2>
      <div className="score">{score}</div>
    </div>
  );
}
