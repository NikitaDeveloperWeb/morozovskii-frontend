import React from 'react';

interface FeedbackItemProps {
  name: string;
  text: string;
}

function FeedbackItem({ name, text }: FeedbackItemProps) {
  return (
    <div className="feedbackItem">
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeedbackItem;
