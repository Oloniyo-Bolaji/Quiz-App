import React, { useState, useEffect } from "react";
import "./App.css";
import questionData from "./data.js";
import Question from "./question";

const App = () => {
  const [question] = useState(questionData);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [userans, setUserans] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showscore, setShowscore] = useState(false);
  const [end, setEnd] = useState(false);
  const [secs, setSecs] = useState(30);

  const nextQuestion = () => {
    if (index === questionData.length - 1) {
      setShowscore(true);
    } else {
      setIndex(index + 1);
    }
  };
  const prevQuestion = () => {
    if (index === 0) {
      setIndex(questionData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const submitAns = () => {
    setEnd(true);
    setShow(false);
  };

  const tryAgain = () => {
    setShow(true);
    setEnd(false);
    setSecs(30);
    setIndex(0);
    setScore(0);
  };
  const startQuiz = () => {
    setShow(true);
  };

  const selectedOption = (useroption) => {
    setUserans(useroption);
    if (useroption === question[index].answer) {
      setCorrect(true);
      setScore(score + 1);
    } else {
      setCorrect(false);
    }
    if (useroption !== question[index].answer) {
      console.log("incorrect");
    }
  };

  useEffect(() => {
    if (show) {
      const timeInterval = setInterval(() => {
        setSecs((prevSecs) => {
          if (prevSecs === 0) {
            setShow(false);
            setEnd(true);
            clearInterval(timeInterval);
          }
          return prevSecs - 1;
        });
      }, 1000);
    }
  }, [show]);

  return (
    <div className="container">
      <button className={`start-btn ${end ? "none" : ""}`} onClick={startQuiz}>
        Start
      </button>
      {show && (
        <div className="cont">
          <div className="timer-container">
            <div></div>
            <div className="timer">{secs}</div>
          </div>
          <Question
            question={question}
            index={index}
            show={show}
            userans={userans}
            correct={correct}
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            submitAns={submitAns}
            selectedOption={selectedOption}
          />
        </div>
      )}
      {end && (
        <div className="score">
          <h3>
            Your score is {score}/{question.length}
          </h3>
          <span>
            {score <= 4
              ? "Do better next time"
              : "Congratulations! You are amazing"}
          </span>
          <button onClick={tryAgain}>Try again</button>
        </div>
      )}
    </div>
  );
};

export default App;
