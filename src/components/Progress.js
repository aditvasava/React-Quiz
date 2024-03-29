import React from "react";

function Progress({ i, numQuestions, score, maxScore, answer }) {
  return (
    <header className="progress">
      <progress max={15} value={i + Number(answer !== null)}></progress>
      <p>
        Question <strong>{i + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{score}</strong> / {maxScore}
      </p>
    </header>
  );
}

export default Progress;
