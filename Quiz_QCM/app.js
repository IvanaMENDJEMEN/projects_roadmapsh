let score = 0;
// Déclaration d'une constante contenant toutes les questions du quiz
const quizData = [  // tableau contenant plusieurs objets
  {
    // Objet 1 : première question
    question: "Quels sont des langages de programmation ?",  // texte de la question
    options: ["Python", "HTML", "JavaScript", "CSS"],        // tableau des réponses possibles
    correct: ["Python", "JavaScript"]                        // tableau des bonnes réponses
  },
  {
    question: "Quelles villes sont des capitales de leur pays ?", 
    options: ["Barcelone", "Nairobi", "Sydney", "Le Caire"], 
    correct: ["Nairobi", "Le Caire"]
  },
  {
    question: "Quels sont des instruments de musique ?", 
    options: ["Guitare", "Stylos", "Violons", "Batterie"], 
    correct: ["Guitare", "Violons", "Batterie"]
  },
  {
    question: "Quelles disciplines sont aux Jeux Olympiques ?", 
    options: ["Cricket", "Football", "Karaté", "Natation"], 
    correct: ["Football", "Karaté", "Natation"]
  },
  {
    question: "Quels organes font partie du système digestif ?", 
    options: ["Cœur", "Estomac", "Foie", "Intestin grêle"], 
    correct: ["Estomac", "Foie", "Intestin grêle"]
  }
];

let currentQuestion = 0;

const questionElement = document.getElementsByClassName('question')[0]
const answerForm = document.getElementById('answer')

function loadQuestion() {
    //vide les reponse
    answerForm.innerHTML = '';
    
    //recupere la question actuelle
    const current = quizData[currentQuestion]
    questionElement.textContent = current.question

    current.options.forEach(option => {
        // Crée un élément <label> pour afficher une ligne de réponse
        const label = document.createElement('label')

        //
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.name = 'answer';
        checkbox.value = option

        label.appendChild(checkbox);

        const contentOption = document.createTextNode(option)
        label.appendChild(contentOption)

        answerForm.appendChild(label)
    })
}
//Appel automatiquement la fonction au chargement de la page
window.onload = loadQuestion;

//Fonction lorsqu'on clique sur le bouton valider
document.getElementById('validate-btn').addEventListener('click', () => {
    // Recupere les options cochees et transforme la liste en tableau JS pour quon puisse faire .map()
    const selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked'))
                                 .map(input => input.value);
    const correctAnswer = quizData[currentQuestion].correct;

    // Verifie que l'utilisateur a coche autant de reponses qu'il ya n'a correctes et que chaue reponse cochee est bien une bonne reponse
    const isCorrect = selectedOptions.length === correctAnswer.length && selectedOptions.every(answer => correctAnswer.includes(answer));

    // Affiche le resultat
    const resultElement = document.getElementById('result');
    if (isCorrect) {
        resultElement.textContent = 'Bonne réponse !';
        resultElement.style.color = 'green'
        score ++;
    }else {
        resultElement.textContent = 'Mauvaise réponse.';
        resultElement.style.color = 'red'

        document.querySelectorAll('input[name="answer"]').forEach(input => {
            if (correctAnswer.includes(input.value)) {
                input.parentElement.style.color = "brown";  
            }
            input.disabled = true;
        })
    };

    // Désactive les cases cochées après validation
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        
    })
    // Changer le bouton pour "Suivant"
    const validateBtn = document.getElementById("validate-btn");
    validateBtn.textContent = "Question suivante";
    validateBtn.onclick = goToNextQuestion;
});

function goToNextQuestion() {
    currentQuestion ++;

    // Efface le résultat affiché
    document.getElementById("result").textContent = "";

    if (currentQuestion < quizData.length) {
        loadQuestion();
        // Rechange le bouton en "Valider"
        const btn = document.getElementById("validate-btn");
        btn.textContent = "Valider";
        btn.onclick = null;
    } else {
        // Sinon, on termine le quiz
        showFinalMessage();
    }
}

function showFinalMessage() {
    const quiz = document.getElementById("quiz-container");
    quiz.innerHTML = `
        <h2> Bravo ! Vous avez terminé le quiz.</h2> 
        <p>Vous avez obtenu <strong>${score}</strong> bonne(s) réponse(s) sur <strong>${quizData.length}</strong>.</p>
        `;

}