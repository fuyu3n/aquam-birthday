import { useMemo, useRef, useState } from 'react';
import './App.css';
import questions from './question';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const showQuestion = useMemo(() => questions[currentQuestion], [currentQuestion]);

  const audioRef = useRef<HTMLAudioElement>(null);

  const nextQuestionHandle = () => {
    if (currentQuestion === questions.length - 1) return setCurrentQuestion(0);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <>
      <h1>{showQuestion.question}</h1>
      <div className="card">
        {showQuestion.choices.map((choice, index) => (
          <button key={index} onClick={nextQuestionHandle}>
            {choice}
          </button>
        ))}
      </div>

      {showQuestion && showQuestion.playSound && <audio ref={audioRef} src="/rizz-sounds.mp3" autoPlay />}
    </>
  );
}

export default App;
