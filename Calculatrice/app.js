// variable pour stocker l'expression
let expression = "";

// sélection de l'écran d'affichage
const screen = document.getElementById("screen");

// Ajout de texte depuis les boutons cliqués
function appendValue(button) {
  const dernierCaractere = expression.slice(-1);

  if (estOperateur(dernierCaractere) && estOperateur(button.innerText)) {
    // Remplace le dernier opérateur par le nouveau
    expression = expression.slice(0, -1) + button.innerText;
    updateDisplay();
  } else {
    // Sinon, on ajoute normalement
    expression += button.innerText;
    updateDisplay();
  }

}

function estOperateur(caractere) {
  return ['+', '-', '*', '/'].includes(caractere);
}

// Mise à jour de l'affichage
function updateDisplay() {
  screen.value = expression;
}

function ClearDisplay() {
  expression = "";
  updateDisplay();
}

// Supprimer le dernier caractère (retour arrière)
function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

// Calcul du résultat (avec vérification)
function calculateResult() {
  // Vérifie que les parenthèses sont bien équilibrées
  if (!parenthesesAreBalanced(expression)) {
    screen.value = "Erreur: parenthèses";
    expression = "";
    return;
  }

  try {
    const result = eval(expression);
    expression = result.toString(); // on garde le résultat pour continuer
    updateDisplay();
  } catch (e) {
    screen.value = "Erreur de calcul";
    expression = "";
  }
}

// Vérifie que les parenthèses sont équilibrées
function parenthesesAreBalanced(expr) {
  let count = 0;
  for (let char of expr) {
    if (char === "(") count++;
    else if (char === ")") count--;
    if (count < 0) return false;
  }
  return count === 0;
}
