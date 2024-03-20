// src/components/Features.js
import React, { useState } from 'react';

const Features = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer(!showAnswer);

  return (
    <section>
      <h2>Features</h2>
      <ul>
        <QAItem question="How does this feature work?" answer="This feature works by..." />
        <QAItem question="Can I customize this feature?" answer="Yes, you can customize..." />
        <QAItem question="What are the benefits of this feature?" answer="The benefits include..." />
      </ul>
    </section>
  );
};

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

export default Features;
