import React from 'react';
import './BoxMessage.css';

function BoxMessage(props) {
  return (
    <div className={`message ${props.sent ? 'message-sent' : 'message-received'}`}>
      <span className="message-text">{props.text}</span>
      <span className="message-time">{props.time} </span>
    </div>
  );
}

export default BoxMessage;
