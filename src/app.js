// app.js
// Task Manager App logic (Feature 2)

// Create an empty array to store task objects
const tasks = [];  // stores each task as { name, category, deadline, status }

// Reference input fields and button from the DOM
const taskNameInput     = document.getElementById("taskName");     // Task name input element
const taskCategoryInput = document.getElementById("taskCategory"); // Task category input element
const taskDeadlineInput = document.getElementById("taskDeadline"); // Task deadline input element
const taskStatusSelect  = document.getElementById("taskStatus");   // Task status select element
const addTaskBtn        = document.getElementById("addTaskBtn");   // "Add Task" button element

// Listen for clicks on the Add Task button
addTaskBtn.addEventListener("click", function() {
  // Read input values
  const name     = taskNameInput.value;       // get the current task name
  const category = taskCategoryInput.value;   // get the current task category
  const deadline = taskDeadlineInput.value;   // get the current task deadline
  const status   = taskStatusSelect.value;    // get the current task status

  // Create a task object with the captured values
  const task = {
    name: name,
    category: category,
    deadline: deadline,
    status: status
  };

  // Add the task object to the tasks array
  tasks.push(task);

  // Clear the input fields for the next entry
  taskNameInput.value     = "";               // reset task name input
  taskCategoryInput.value = "";               // reset category input
  taskDeadlineInput.value = "";               // reset deadline input
  taskStatusSelect.value  = "In Progress";    // reset status dropdown

  // Log the updated tasks array for verification
  console.log(tasks);
});
