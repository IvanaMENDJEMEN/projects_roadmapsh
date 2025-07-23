const ul = document.getElementsByClassName('taskList')

window.onload = function() { //exécute ce bloc quand la page est entièrement chargée.
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []; // récupère les tâches stockées (au format chaîne JSON)

  savedTasks.forEach(taskText => {
        const taskElement = createTaskElement(taskText);
        const ul = document.getElementsByClassName('taskList')[0];
        ul.appendChild(taskElement);    
  });
};

function createTaskElement(taskText) {
    const taskli = document.createElement('li');
    const span = document.createElement('span');

    taskli.textContent = taskText;

    // Ajoute a l'element span un id et un contenu 
    span.textContent = '🗑️'
    span.id = 'deleteTask';
    
    // Lier la fonction de suppression (dissociée)
    span.addEventListener('click', deleteTask);

     //Ajoute le span comme un element enfant a li 
    taskli.appendChild(span);

    return taskli;
}

function addTask() {
    const input = document.getElementById('myinput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Aucune Tache Saisie');
    }
    else {

        const taskElement = createTaskElement(taskText);
        saveTask(taskText);
        const ul = document.getElementsByClassName('taskList')[0];
        ul.appendChild(taskElement);
        
        // reinitialise input
        input.value = '';
        input.focus();
    }
}
 
//Supprime la tache
function deleteTask(event) {
    const span = event.target;
    const li = span.parentElement;
    li.remove();
    const taskText = li.childNodes[0].nodeValue.trim();
    removeTask(taskText);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(taskToRemove) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}


