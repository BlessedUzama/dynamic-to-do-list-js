document.addEventListener('DOMContentLoaded', (event) => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!'); 
        }
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove"
            removeBtn.classList.add('remove-btn')
            removeBtn.addEventListener('click', function () {
                listItem.remove();
            })
            listItem.appendChild(removeBtn);
            taskList.appendChild(listItem);
            taskInput.value = ''
        }
    }
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
        addTask();
    })
})