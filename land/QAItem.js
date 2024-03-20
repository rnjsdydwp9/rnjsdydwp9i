// src/components/QAItem.js
import React, { useState } from 'react';

const QAItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer(!showAnswer);

  return (
    <>
      <li className="question" onClick={toggleAnswer}>{question}</li>
      {showAnswer && <li className="answer">{answer}</li>}
    </>
  );
};

export default QAItem;
