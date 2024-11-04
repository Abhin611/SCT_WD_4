// To-Do List Functionality
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskValue = taskInput.value.trim();
    const dateValue = taskDate.value;

    if (taskValue) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskValue} ${dateValue ? ` (Due: ${new Date(dateValue).toLocaleString()})` : ''}</span>
            <div class="task-controls">
                <button onclick="markCompleted(this)">Complete</button>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="removeTask(this)">Remove</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        taskDate.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function markCompleted(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('.task-text');
    taskText.classList.toggle('completed');
    button.innerText = taskText.classList.contains('completed') ? 'Undo' : 'Complete';
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('.task-text');
    
    const newTaskValue = prompt('Edit your task:', taskText.innerText.split(' (Due:')[0]);
    if (newTaskValue !== null && newTaskValue.trim() !== '') {
        taskText.innerText = newTaskValue + (taskText.innerText.includes('(Due:') ? taskText.innerText.slice(taskText.innerText.indexOf('(Due:')) : '');
    }
}

function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskList.removeChild(taskItem);
}
