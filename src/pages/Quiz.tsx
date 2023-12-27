import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Question } from "../types/types";

const Quiz = () => {
  const location = useLocation();
  const quizData = location.state;
  const questions: Question[] = quizData.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswerClick = (selectedOption: string): void => {
    const isCorrect = questions[currentQuestion].answer === selectedOption;

    setUserAnswers([...userAnswers, selectedOption]);
    setScore(isCorrect ? score + 1 : score);

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  function navigateToMenu(): void {
    navigate("/");
  }

  return (
    <div className="quiz-layout">
      <h1>Answer This Question</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>

          <ul>
            {questions[currentQuestion].options.map((option,idx) => (
              <div key={idx}>
                <button onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
                <br />
                <br />
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score}/{questions.length}
          </p>
        </div>
      )}

      <br />
      <br />
      <button onClick={navigateToMenu}>Go back to Main Menu</button>
    </div>
  );
};

export default Quiz;
