import { useState } from "react";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import Countdown from "@/components/CountdownTimer";
import { useLoaderData } from "react-router-dom";
import { getQuiz } from "@/quiz";
import "./Quiz.css";

export async function loader({ params }) {
  return getQuiz(params.quizId);
}
const quizTimeInMilliSeconds = 3 * 60 * 1000;
const NOW_IN_MS = Date.now();
const targetDate = NOW_IN_MS + quizTimeInMilliSeconds;

function Quiz() {
  const quiz = useLoaderData();
  const { questions } = quiz;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array.from({ length: questions.length }, () => false)
  );
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
    setAnsweredQuestions(Array.from({ length: questions.length }, () => false));
    setSelectedOption("");
  };

  const handleTimeout = () => {
    setShowScore(true);
  };

  const previousQuestion = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const selectOption = (option) => {
    setAnsweredQuestions(
      answeredQuestions.map((question, index) =>
        index === currentQuestion ? true : question
      )
    );
    setSelectedOption(option.answerText);
    if (option.isCorrect) {
      setScore(score + 1);
    }
  };
  return (
    <div className="App">
      {showScore ? (
        <Modal inProp={showScore} closeModal={() => setShowScore(false)}>
          <div className="score-section">
            You scored {score} out of {questions.length}
            <button onClick={startQuiz}>Back</button>
          </div>
        </Modal>
      ) : (
        <div className="quiz-container">
          <div>
            <button onClick={startQuiz}>Back</button>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                <strong>{questions[currentQuestion].questionText}</strong>
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  key={answerOption.answerText}
                  onClick={() => selectOption(answerOption)}
                  className={`answer-button ${
                    selectedOption === answerOption.answerText
                      ? "selected-answer"
                      : ""
                  }`}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
            <Button
              variant="dark"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous Question
            </Button>
            <Button onClick={nextQuestion}>
              {currentQuestion >= questions.length - 1
                ? "Submit Exam"
                : "Next Question"}
            </Button>
          </div>

          {/* Keep track of answered/unanswered questions*/}
          <div className="question-track-container">
            {answeredQuestions.map((question, index) => (
              <Button
                key={index}
                variant={question ? "primary" : "dark"}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </Button>
            ))}
            {/* <button onClick={startQuiz}>start</button> */}
            <Countdown targetDate={targetDate} onTimeout={handleTimeout} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
