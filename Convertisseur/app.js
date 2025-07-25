async function convertir() {
  const montant = parseFloat(document.getElementById("montant").value);
  const deviseStart = document.getElementById("devise-start").value;
  const deviseEnd = document.getElementById("devise-end").value;
  const resultat = document.getElementById("resultat-conversion");
  const tauxEchange = document.getElementById("taux-echange");

  // VérifiE SI LE MONTANT EST UN NOMBRE ET SI LES DEVISES SONT SÉLECTIONNÉES
  if (isNaN(montant) || !deviseStart || !deviseEnd) {
    alert("Veuillez remplir tous les champs correctement.");
    return;
  }

const apiKey = '743d06cf6c6dba51c71d9699';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${deviseStart}/${deviseEnd}/${montant}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);
    if (data.result === "success") {
      resultat.value = data.conversion_result;
      tauxEchange.textContent = `Taux de change: 1 ${deviseStart} = ${data.conversion_rate} ${deviseEnd}`;
    } else {
      resultat.textContent = "Erreur !";
      alert("Conversion impossible.");
      
    }

  } catch (error) {
    alert("Erreur lors de la connexion à l'API.");
    console.error(error);
  }
}

document.getElementById("convertbtn").addEventListener("click", convertir);