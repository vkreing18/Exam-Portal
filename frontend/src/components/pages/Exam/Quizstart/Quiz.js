import React from "react";
import { useState, useEffect } from "react";
import "./Quiz.css";
import { Link } from "react-router-dom";

const Quiz = () => {
  var Questionbank = [
    {
      Question: "Q.1) Javascript is an _______ language?",
      Answers: [
        { Answer: "Object-Oriented", isCorrect: true },
        { Answer: "Object-Based", isCorrect: false },
        { Answer: "Procedural", isCorrect: false },
        { Answer: "Sequential", isCorrect: false },
      ],
    },
    {
      Question:
        "Q2.) Following methods can be used to display data in some form using Javascript",
      Answers: [
        { Answer: "compare()", isCorrect: false },
        { Answer: "document.write()", isCorrect: true },
        { Answer: "console.log()", isCorrect: true },
        { Answer: "toString()", isCorrect: false },
      ],
    },
    {
      Question:
        "Q.3) When an operator value is NULL, the typeof returned by the unary operator is:",
      Answers: [
        { Answer: "Undefined", isCorrect: true },
        { Answer: "Boolean", isCorrect: false },
        { Answer: "Object", isCorrect: false },
        { Answer: "String", isCorrect: false },
      ],
    },
    {
      Question: "Q.4) What does the toString() method return?",
      Answers: [
        { Answer: "Object", isCorrect: false },
        { Answer: "String", isCorrect: true },
        { Answer: "Integer", isCorrect: false },
        { Answer: "Float", isCorrect: false },
      ],
    },
    {
      Question:
        "Q.5) Which function is used to serialize an object into a JSON string?",
      Answers: [
        { Answer: "parse()", isCorrect: false },
        { Answer: "convert()", isCorrect: false },
        { Answer: "stringify()", isCorrect: true },
        { Answer: "cpmpare()", isCorrect: false },
      ],
    },
    {
      Question: " Q.6) Javascript is an _______ language",
      Answers: [
        { Answer: "Object-Oriented", isCorrect: true },
        { Answer: "Object-Based", isCorrect: false },
        { Answer: "Procedural", isCorrect: false },
        { Answer: "Sequential", isCorrect: false },
      ],
    },
    {
      Question:
        "Q.7) Following methods can be used to display data in some form using Javascript",
      Answers: [
        { Answer: "compare()", isCorrect: false },
        { Answer: "document.write()", isCorrect: true },
        { Answer: "console.log()", isCorrect: true },
        { Answer: "toString()", isCorrect: false },
      ],
    },
    {
      Question:
        "Q.8) When an operator value is NULL, the typeof returned by the unary operator is:",
      Answers: [
        { Answer: "Undefined", isCorrect: true },
        { Answer: "Boolean", isCorrect: false },
        { Answer: "Object", isCorrect: false },
        { Answer: "String", isCorrect: false },
      ],
    },
    {
      Question: "Q.9) What does the toString() method return?",
      Answers: [
        { Answer: "Object", isCorrect: false },
        { Answer: "String", isCorrect: true },
        { Answer: "Integer", isCorrect: false },
        { Answer: "Float", isCorrect: false },
      ],
    },
    {
      Question:
        "Q.10) Which function is used to serialize an object into a JSON string?",
      Answers: [
        { Answer: "parse()", isCorrect: false },
        { Answer: "convert()", isCorrect: false },
        { Answer: "stringify()", isCorrect: true },
        { Answer: "cpmpare()", isCorrect: false },
      ],
    },
  ];

  //useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    if (timeRemaining === 0) {
      handleAnswerResponse(false);
    }

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
      setTimeRemaining(60);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      <div class="position-absolute top-50 start-50 translate-middle">
        <div className="app">
          <head>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              integrity="sha512-BsqMnST78JFyI+eNn0dL5O5+5JHbxQCYC2gY5w+elzQUZI0LdDzKNbO5p0aD1f+CbAKTYJXdOYaRlRQF0IbZQ=="
              crossorigin="anonymous"
              referrerpolicy="no-referrer"
            />
          </head>
          {showScore ? (
            <div className="score-section">
              {{score} <= 5 ? `Sorry !! You have scored ${score} out of ${Questionbank.length}` : `Sorry !! You have scored ${score} out of ${Questionbank.length}`}
              <>
                <Link className="btn  btn-primary mx-2" to="/Exam">Return</Link>
              </>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestion + 1}</span>/{Questionbank.length}
                </div>
                <div className="timer">
                  Time Remaining: {timeRemaining} seconds
                </div>

                <div className="question-text">
                  <h4>{Questionbank[currentQuestion].Question}</h4>
                </div>
              </div>

              <div className="answer-section">
                {Questionbank[currentQuestion].Answers.map((answer) => (
                  <button
                    className="btn btn-info my-1"
                    onClick={() => handleAnswerResponse(answer.isCorrect)}
                  >
                    {answer.Answer}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
