import React from "react";
import "../Exam.css";
import { Link } from "react-router-dom";

function QuizStart() {
  return (
    <>
      <div>
        <div className="start_btn">
          <Link className="start" to="/Quiz">Start Quiz</Link>
        </div>
      </div>
    </>
  );
}

export default QuizStart;
