
import React from 'react';
import FAQItem from './FAQItem';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


const AnimatedTitle = styled.h2`
  animation: ${fadeIn} 1s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  font-family: 'Arial', sans-serif;
    font-size:50px;
    background: linear-gradient(45deg, #ff6ec4, #4a90e2);
    -webkit-background-clip: text;
    color: transparent;
`;

const FAQContainerWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto 20px; /* Centered and bottom margin added */
  padding: 20px;
  text-align: center; /* Center the content */
`;

const faqData = [
    { question: 'What services does your healthcare facility provide?',
     answer: 'We offer a range of medical services, including primary care, specialized consultations, diagnostic tests, and preventive care.' },
    { question: 'What preventive care services do you recommend?',
     answer: 'Our recommended preventive care services include vaccinations, regular health screenings, and lifestyle counseling for maintaining overall well-being.' },
     {question:'What should I expect during a routine check-up?   ',
  answer:'A routine check-up typically involves a physical examination, health history review, vital sign measurements, and discussions about any health concerns or lifestyle factors.'},
   {question:'Are virtual or telehealth appointments available? ',
  answer:'Yes, we offer virtual and telehealth appointments, allowing you to consult with healthcare professionals remotely for certain medical issues or follow-up appointments.'},
  {question:'How can I contact the healthcare provider in case of an emergency?',
  answer:'In case of an emergency, please dial [Emergency Number]. For non-emergencies, you can contact our clinic at [Clinic Phone Number] during business hours or visit the nearest emergency room if immediate attention is required.'}
  
  
  ];
  

const FAQContainer = () => {
  return (
    <FAQContainerWrapper>
      <AnimatedTitle>
        Your Health Hub
      </AnimatedTitle>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </FAQContainerWrapper>
  );
};

export default FAQContainer;
