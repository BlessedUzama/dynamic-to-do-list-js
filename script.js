document.addEventListener('DOMContentLoaded', (event) => {
    // Function to load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks from Local Storage
    } 

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add tasks to the DOM and optionally save to Local Storage
    function addTask(taskText, save = true) {
        // If taskText is not passed, get it from the input field
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        // Check if taskText is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create the list item and remove button
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Add the remove event listener
        removeBtn.addEventListener('click', function () {
            listItem.remove(); // Remove task from the DOM
            removeTaskFromStorage(taskText); // Remove task from Local Storage
        });

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        taskInput.value = ''; // Clear input field

        // Save the task to Local Storage if `save` flag is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to remove tasks from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated array back to Local Storage
    }

    // Event listener for the add button
    addButton.addEventListener('click', () => {
        addTask();
    });

    // Event listener for Enter key press to add tasks
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Call the function to load tasks from Local Storage when the page loads
    loadTasks();
});
