// app.js
// Task Manager App logic (Feature 3)

// 1. Data store
const tasks = [];  // will hold task objects

// 2. Reference DOM elements
const taskNameInput     = document.getElementById("taskName");     // Task name input
const taskCategoryInput = document.getElementById("taskCategory"); // Task category input
const taskDeadlineInput = document.getElementById("taskDeadline"); // Task deadline input
const taskStatusSelect  = document.getElementById("taskStatus");   // Task status dropdown
const addTaskBtn        = document.getElementById("addTaskBtn");   // Add Task button
const taskList          = document.getElementById("taskList");     // UL container for tasks

// 3. renderTasks(): updates the page to show all tasks
function renderTasks() {
  taskList.innerHTML = "";                                      // clear existing list

  tasks.forEach(function(task) {
    const li = document.createElement("li");                   // create a list item
    li.innerHTML = `
      <strong>${task.name}</strong> -                         <!-- task name -->
      ${task.category} -                                      <!-- task category -->
      Due: ${task.deadline} -                                 <!-- task deadline -->
      Status: ${task.status}                                  <!-- task status -->
    `;
    taskList.appendChild(li);                                 // add item to UL
  });
}

// 4. Add Task handler
addTaskBtn.addEventListener("click", function() {
  // read inputs
  const name     = taskNameInput.value.trim();
  const category = taskCategoryInput.value.trim();
  const deadline = taskDeadlineInput.value;
  const status   = taskStatusSelect.value;

  // create and store object
  tasks.push({ name, category, deadline, status });

  // update the display
  renderTasks();

  // reset form
  taskNameInput.value     = "";
  taskCategoryInput.value = "";
  taskDeadlineInput.value = "";
  taskStatusSelect.value  = "In Progress";
});
