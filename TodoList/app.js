
function addTask() {
    const input = document.getElementById('myinput');
    const taskText = input.value;
    if (taskText === '') {
        alert('Aucune Tache Saisie');
    }
    else {

        //cree l'element li et ajoute la tache entrer par l'utilisateur comme contenu 
        const taskli = document.createElement('li');
        taskli.textContent = taskText;

        // cree et Ajoute a l'element span un id et un contenu 
        const span = document.createElement('span');
        span.textContent = '🗑️'
        span.id = 'deleteTask';

        //Ajoute le span comme un element enfant a li 
        taskli.appendChild(span);

        //Ajoute l'element li comme enfant de ul 
        const ul = document.getElementsByClassName('taskList')

        //ajoute li comme le premier element de ul  (Ajuster plusieurs taches)
        ul[0].appendChild(taskli);
        console.log('ul = ', ul)

        input.value = '';
    }

}


