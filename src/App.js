import React, { useState } from "react";
import "./App.css";
const questions = [
  {
    question: "Who are you?",
    answer: [
      { answer: "Programmer", isCorrect: false },
      { answer: "Gamer", isCorrect: true },
      { answer: "Artist", isCorrect: false },
      { answer: "Tutor", isCorrect: false },
    ],
  },
  {
    question: "Who is your favourite?",
    answer: [
      { answer: "Dhoni", isCorrect: false },
      { answer: "Virat", isCorrect: true },
      { answer: "Rohit", isCorrect: false },
      { answer: "Rahul", isCorrect: false },
    ],
  },
  {
    question: "Where did you go?",
    answer: [
      { answer: "India", isCorrect: false },
      { answer: "Germany", isCorrect: false },
      { answer: "Newzeland", isCorrect: true },
      { answer: "Europe", isCorrect: false },
    ],
  },
  {
    question: "When  will you go ?",
    answer: [
      { answer: "Today", isCorrect: false },
      { answer: "Tomorrow", isCorrect: false },
      { answer: "Yesterday", isCorrect: false },
      { answer: "None", isCorrect: true },
    ],
  },
];

export default function App() {
  const [questionNumber, setquestions] = useState(0);
  const [marks, setmarks] = useState(0);
  const [green,setGreen]=useState(0)
  const [red,setRed]=useState(0)
  const [correct,setcorrect]=useState(0)

  const handleClick = (x) => {
    if (x.isCorrect) {
      setmarks(marks + 1);
      setGreen(green+25)
      setcorrect(correct+1)
    } else {
      setmarks(marks - 1);
      setRed(red+25)
    }
    if (questionNumber < questions.length) {
      setquestions(questionNumber + 1);
    }
  };

  if (questionNumber < questions.length) {
    return (
      <div className="app">
        <div className="answerColor">
          <div >
            <h4> Correct</h4>
            <div className="blank">
            <div className="Rightanswer" style={{"width":`${green}%`}}></div></div>
          </div>
          <div >
          <h4> Wrong</h4>
          <div className="blank">
            <div className="Wronganswer" style={{"width":`${red}%`}} ></div> </div>
          </div>
        </div>

        <div className="question-text finalAnswer">
          <h3>Points {marks}</h3>
          <h1>Question {questionNumber+1}/4</h1>
          <h3>{questions[questionNumber].question} </h3>
          
        </div>
        <div className="">
          <h4>Answers :- </h4>
          <div className="finalAnswer listitem">
          {questions[questionNumber].answer.map((x) => (
            <button onClick={() => handleClick(x)}>{x.answer}</button>
           ))}
            </div>
        </div>
        <h4>Note: Write answer = +1 & wrong answer= -1</h4>
      </div>
    );
  } else {
    return (
      <div className="app">
        <div className="answerColor">
          <div >
            <h4> Correct</h4>
            <div className="blank">
            <div className="Rightanswer" style={{"width":`${green}%`}}></div></div>
          </div>
          <div >
          <h4> Wrong</h4>
          <div className="blank">
            <div className="Wronganswer" style={{"width":`${red}%`}} ></div> </div>
          </div>
        </div>
        <br></br>
        <h1 className="finalAnswer">You Scored {correct} out of {questions.length} </h1>
      </div>
    );
  }
}
