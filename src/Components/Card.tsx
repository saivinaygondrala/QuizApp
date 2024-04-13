import "../styles/Card.css";
const Card = () => {
    const score = localStorage.getItem("score") || "";
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img
            src="data:image/jpeg;base64,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"
            alt="software engineering quiz"
          />
        </div>
        <div className="card-content-container">
          <h3>
            <a href="/quiz">Software Engineering Quiz</a>
          </h3>
          {/* <h3>Your Score: {parseInt(score) >=0 ? score : " - "} / 20</h3> */}
        </div>
      </div>
    </>
  );
};

export default Card;
