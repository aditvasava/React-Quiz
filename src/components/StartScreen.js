import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  const handleClick = () => {
    dispatch({ type: "start" });
  };
  return (
    <div>
      <h2>Welcome to React Quiz!</h2>
      <h3>{numQuestions} questions to test your react knowledge</h3>
      <button className="btn btn-ui" onClick={handleClick}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
