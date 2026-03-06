// Retrieve the HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Declare an empty array
let tasks = [];

// Button addTask
function addTask() {
    // Retrieve the value entered into the taskInput & trim any trailing whitespaces 
    const taskText = taskInput.value.trim();
    // Check if the taskText is not an empty string
    if (taskText !== "") {
        // If not empty, create a new task object with the entered text
        tasks.push({ text: taskText});
        // Reset the value of the taskInput
        taskInput.value = "";
        // Display the entered tasks
        displayTasks();
    }
}

// Unordered list for displaying tasks
function displayTasks() {
    // Clear existing content within the taskList
    taskList.innerHTML = "";
    // Iterate through the tasks array
    tasks.forEach((task, index) => {
        // Create a list item for each task
        const li = document.createElement("li");
        // Construct HTML content for each task
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        // Set up an event listener for each checkbox
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Toggle the completion status of a task in the array based on the provided index.
function toggleTask(index) {
    // Change the task's completed status to the opposite of what it was
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Button Clear Completed
function clearCompletedTasks() {
    // Retrieve only the tasks that are not marked as completed
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Listen for clicks after clicking the Add Task and Clear Completed buttons.
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Calls the displayTasks function to show the entered todo task after clicking the Add Task button
displayTasks();


