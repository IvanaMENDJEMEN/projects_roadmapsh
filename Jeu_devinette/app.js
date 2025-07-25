const input = document.getElementById("guess-input");
const validateButton = document.getElementById("guess-btn");
const resultMessage = document.getElementById("result-message");

let attempts = 5;

validateButton.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const userGuess = parseInt(input.value);  

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
        return;
    }  
    
    if (userGuess == randomNumber) {
        resultMessage.textContent = `Bravo ! Vous avez trouvé le nombre ${randomNumber} en ${5 - attempts + 1} tentatives.`;
    } else if (userGuess < randomNumber) {
        attempts--;
        input.value = "";
        resultMessage.textContent = "Trop bas ! Essayez un nombre plus grand. Il vous reste " + attempts + " tentatives.";
    } else {
        attempts--;
        input.value = "";
        resultMessage.textContent = "Trop haut ! Essayez un nombre plus petit.Il vous reste " + attempts + " tentatives.";
    }

    if (attempts === 0) {
        resultMessage.textContent = `Désolé, vous avez épuisé vos tentatives. Le nombre était ${randomNumber}.`;
    }
    input.value = "";
})

function resetGame() {
    attempts = 5;
    input.value = "";
    resultMessage.textContent = "Le jeu a été réinitialisé.";
    
}

document.getElementById("reset-btn").addEventListener("click", resetGame);