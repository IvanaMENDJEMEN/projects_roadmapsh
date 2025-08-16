import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import BoxMessage from './Components/BoxMessage';

function App() {
  const [messages, setMessages] = useState(() => {
    // Récupérer les messages du localStorage ou initialiser avec un tableau vide
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const currentUserId = 'user_local'; // Identifiant utilisateur local

  // Mettre à jour le localStorage chaque fois que les messages changent
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const [newMessage, setNewMessage] = useState(''); // État pour le champ de saisie

  // Ref vers la div contenant les messages
  const messagesEndRef = useRef(null);

  // Scroll automatique vers le bas quand messages changent
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])

   // Fonction pour envoyer un message
  const handleSend = () => {
    if (newMessage.trim() === '') return; // Ne rien faire si le message est vide

    // Créer un objet message avec le texte et l'heure actuelle et le Formatage de l'heure
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = now.toLocaleDateString("fr-FR");

    const input = {
      id: Date.now(),         // ID unique (timestamp)
      userId: currentUserId,  // ID de l’utilisateur qui envoie
      text: newMessage.trim(),
      time: time,
      date: date     
    };

    // Ajouter le nouveau message à l'état
    setMessages([...messages, input]);
    setNewMessage(''); // Réinitialiser le champ de saisie
  };
    

  return (
    <div className="app-container">
      <h2> Chat G2D</h2>

      <div className="chat-box">
       {messages.map((msg, index) => {
          const showDate = index === 0 || messages[index - 1].date !== msg.date;
          const isSent = msg.userId === currentUserId;

          return (
            <React.Fragment key={index}>
              {showDate && <div className="date-separator">{msg.date}</div>}
              <BoxMessage 
                text={msg.text} 
                time={msg.time}
                sent={isSent} // On transmet si le message est envoyé ou reçu
              />
            </React.Fragment>
          );
        })}
        
        <div ref={messagesEndRef} />
      </div>
      <input
        type="text"
        placeholder="Tape ton message..."
        value={newMessage} // Liaison avec l'état
        onChange={(e) => setNewMessage(e.target.value)} // Met à jour l'état à chaque frappe
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSend(); // Envoi si on appuie sur Entrée
          }
        }}
      />
      <button onClick={handleSend} className="send-button">
        Envoyer
      </button>
    </div>
  );
}

export default App;
