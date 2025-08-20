import React from 'react';
import '../Commentaire/Commentaire.css';

function Commentaire(props) {
  return (
    <div className={`message`}>
      <span className="message-pseudo">{props.pseudo}</span>
      <span className="message-texte">{props.texte} </span>
    </div>
  );
}

export default Commentaire;