import React from "react";
import "./Question.css";

const Question = ({
  nextQuestion,
  userans,
  index,
  correct,
  submitAns,
  prevQuestion,
  selectedOption,
  question,
}) => {
  return (
    <div className="question-container">
      <div className="quest">
        <h3>
          {question[index].id}.{question[index].question}?
        </h3>
      </div>
      <div className="ans-container">
        <li
          className={
            userans === question[index].option1
              ? correct
                ? "correct"
                : "wrong"
              : ""
          }
          onClick={() => {
            selectedOption(question[index].option1);
          }}
        >
          {question[index].option1}
        </li>
        <li
          className={
            userans === question[index].option2
              ? correct
                ? "correct"
                : "wrong"
              : ""
          }
          onClick={() => {
            selectedOption(question[index].option2);
          }}
        >
          {question[index].option2}
        </li>
        <li
          className={
            userans === question[index].option3
              ? correct
                ? "correct"
                : "wrong"
              : ""
          }
          onClick={() => {
            selectedOption(question[index].option3);
          }}
        >
          {question[index].option3}
        </li>
        <li
          className={
            userans === question[index].option4
              ? correct
                ? "correct"
                : "wrong"
              : ""
          }
          onClick={() => {
            selectedOption(question[index].option4);
          }}
        >
          {question[index].option4}
        </li>
      </div>
      <div className="btns">
        <div className="control-btns">
          <button onClick={prevQuestion}>Previous</button>
          <button
            className={index === question.length - 1 ? "next" : ""}
            onClick={nextQuestion}
          >
            Next
          </button>
        </div>
        <div className="submit">
          <button onClick={submitAns}>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default Question;
