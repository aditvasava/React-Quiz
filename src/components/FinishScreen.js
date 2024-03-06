import React from "react";

function FinishScreen({ score, total, dispatch }) {
  return (
    <div>
      <p className="result">
        Your Score is <strong>{score}</strong> out of {total} (
        {Math.ceil((score / total) * 100)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
