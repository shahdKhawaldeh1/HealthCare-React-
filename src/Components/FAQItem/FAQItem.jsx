// FAQItem.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQItemWrapper = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  .FAQqusetion {
    color: black;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:25px;
  }

  .FAQanswer{
    color: #232121;
    font-size:20px;
    display: ${({ showAnswer }) => (showAnswer ? 'block' : 'none')};
  }

  svg {
    margin-left: 10px; // Adjust the margin to your preference
  }
`;

const FAQItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <FAQItemWrapper onClick={toggleAnswer} showAnswer={showAnswer}>
      <h3 className='FAQqusetion'>
        {question}
        {showAnswer ? <FiChevronUp /> : <FiChevronDown />}
      </h3>
      <p className='FAQanswer'>{answer}</p>
    </FAQItemWrapper>
  );
};

export default FAQItem;
