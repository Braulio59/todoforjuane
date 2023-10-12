const input = document.querySelector('.input-text');
const addform = document.querySelector('#userInput');
const tasksList = document.querySelector('.list-container');
const deleteBtn = document.querySelector('.closeBtn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


const saveLocalStorage = tasksList => {
    localStorage.setItem('tasks', JSON.stringify(tasksList));
};


const createTask = task =>
    `<li>${task.name}<img class='closeBtn' src='./assets/pngwing.com.png' data-id=${task.taskId} /</li>`



// logica de renderizacion
const renderTasksList = todoList => {
    tasksList.innerHTML = todoList.map(task => createTask(task)).join('');
};


// funcion para agregar tareas
const addTask = (event) => {
    event.preventDefault();
    const taskName = input.value.trim();

    if(!taskName.length) {
        alert('Por favor, ingresa una tarea');
        return;
    } else if(
        tasks.some(task => task.name.toLowerCase() === taskName.toLowerCase())
    ) {
        alert ('Ya existe esa tarea');
        return;
    }



    
    tasks = [... tasks, {name: taskName, taskId: tasks.length + 1}];
    input.value = '';

    renderTasksList(tasks);
    saveLocalStorage(tasks);
};


const init = () => {
    renderTasksList(tasks);
    addform.addEventListener('submit', addTask )
};

init();
