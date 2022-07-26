import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./Quiz.css"
export default function App(props) {
  const questions = [
    {
      questionText: 'How many monster zones are on a side of the field?',
      answerOptions: [
        { answerText: '5', isCorrect: false },
        { answerText: '7', isCorrect: false },
        { answerText: '6', isCorrect: true },
        { answerText: '10', isCorrect: false },
      ],
    },
    {
      questionText: 'With no link monsters in the extra monster zone, how many face-up pendulum monsters can you summon from the extra deck?',
      answerOptions: [
        { answerText: 'as many as you want', isCorrect: false },
        { answerText: 'only 1', isCorrect: true },
        { answerText: 'all the monsters whose level is less than 5', isCorrect: false },
        { answerText: 'up to 3 monsters', isCorrect: false },
      ],
    },
    {
      questionText: 'Besides meeding a tuner monster, what is the other requirement to synchro summon',
      answerOptions: [
        { answerText: 'the sum of the levels of the mosnters being used should be equal to the level of the synchro monster', isCorrect: true },
        { answerText: 'all the monsters should have the same level as the synchro monster', isCorrect: false },
        { answerText: 'you must use at least 3 monsters', isCorrect: false },
        { answerText: 'the other monsters must always be non-tuner', isCorrect: false },
      ],
    },
    {
      questionText: 'When can you activate a quick play spell?',
      answerOptions: [
        { answerText: 'only during your turn', isCorrect: false },
        { answerText: "only during the opponent's turn", isCorrect: false },
        { answerText: 'must first be set before activating during either turn', isCorrect: false },
        { answerText: "during your turn anytime, and during the opponent's turn if you set it first", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(0)
  
  const navigate = useNavigate();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setCheck(1)

    setTimeout(() => {
    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } 
    else {
      setShowScore(true);
    }
    setCheck(0)}, 3000);

  };
  const handleReturn = () => {
    navigate("/home")
  }
  return (
    <div className='app'>
      {showScore ? (
        <>
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
          <div className="buton d-grid gap-2">
            <Button onClick={handleReturn}>Return Home</Button>
          </div>
        </>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map(answerOption => (
              <button key = {answerOption.answerText} className = {check == 1 ? answerOption.isCorrect ? 'corect' : 'incorect' : ''} onClick={() => {handleAnswerOptionClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
