const input = document.querySelector('.input-text');
const addform = document.querySelector('#userInput');
const tasksList = document.querySelector('.list-container');
const deleteBtn = document.querySelector('.closeBtn');

let tasks = [];

const addTask = (event) => {
    event.preventDefault();
    const taskName = input.value.trim();

    if(!taskName.length) {
        alert('Por favor, ingresa una tarea');
        return;
    }

    tasks = [... tasks, {name: taskName, taskId: tasks.length + 1}];
};


const init = () => {
    addform.addEventListener('submit', addTask )
};

init();
