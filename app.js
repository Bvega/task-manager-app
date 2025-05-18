// src/app.js
// Task Manager App logic (wrapped in DOMContentLoaded to avoid initialization errors)

document.addEventListener("DOMContentLoaded", () => {
  // 1. Load tasks from localStorage or start empty
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // 2. Reference DOM elements
  const taskNameInput     = document.getElementById("taskName");     // Task name field
  const taskCategoryInput = document.getElementById("taskCategory"); // Task category field
  const taskDeadlineInput = document.getElementById("taskDeadline"); // Task deadline field
  const taskStatusSelect  = document.getElementById("taskStatus");   // Initial status dropdown
  const addTaskBtn        = document.getElementById("addTaskBtn");   // “Add Task” button
  const statusFilter      = document.getElementById("statusFilter");   // Status filter dropdown
  const categoryFilter    = document.getElementById("categoryFilter"); // Category filter dropdown
  const taskList          = document.getElementById("taskList");       // UL for rendering tasks

  // 3. saveTasks(): persist the tasks array to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // 4. renderTasks(): updates the UI, handles overdue, filtering, and status dropdowns
  function renderTasks() {
    const statusValue   = statusFilter.value;
    const categoryValue = categoryFilter.value;

    // rebuild category options
    const categories = ["All", ...new Set(tasks.map(t => t.category).filter(c => c))];
    categoryFilter.innerHTML = categories
      .map(cat => `<option value="${cat}"${cat === categoryValue ? " selected" : ""}>${cat}</option>`)
      .join("");

    taskList.innerHTML = "";                            
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    tasks.forEach((task, index) => {
      // auto-mark overdue
      if (task.status !== "Completed" && task.deadline < today) {
        task.status = "Overdue";                     
        saveTasks();                                  // persist overdue update
      }

      // apply filters
      if (statusValue !== "All" && task.status !== statusValue) return;
      if (categoryValue !== "All" && task.category !== categoryValue) return;

      // build list item with status dropdown
      const li = document.createElement("li");
      const statusSelect = `
        <select data-index="${index}">
          <option value="In Progress"${task.status === "In Progress" ? " selected" : ""}>In Progress</option>
          <option value="Completed"${task.status === "Completed" ? " selected" : ""}>Completed</option>
          <option value="Overdue"${task.status === "Overdue" ? " selected" : ""}>Overdue</option>
        </select>
      `;
      li.innerHTML = `
        <strong>${task.name}</strong> -
        ${task.category} -
        Due: ${task.deadline} -
        Status: ${statusSelect}
      `;
      taskList.appendChild(li);
    });

    // wire status-change listeners
    document.querySelectorAll("#taskList select").forEach(sel => {
      sel.addEventListener("change", function() {
        const i = parseInt(this.dataset.index, 10);
        tasks[i].status = this.value;                 // update status
        saveTasks();                                  // persist status change
        renderTasks();                                // refresh UI
      });
    });
  }

  // 5. Add Task handler
  addTaskBtn.addEventListener("click", () => {
    const name     = taskNameInput.value.trim();
    const category = taskCategoryInput.value.trim();
    const deadline = taskDeadlineInput.value;
    const status   = taskStatusSelect.value;

    if (!name || !category || !deadline) {
      alert("Please fill in all fields.");        // prevent empty entries
      return;
    }

    tasks.push({ name, category, deadline, status });  // store new task
    saveTasks();                                       // persist it
    renderTasks();                                     // update UI

    // reset form
    taskNameInput.value     = "";
    taskCategoryInput.value = "";
    taskDeadlineInput.value = "";
    taskStatusSelect.value  = "In Progress";
  });

  // 6. Filter change handlers
  statusFilter.addEventListener("change", renderTasks);
  categoryFilter.addEventListener("change", renderTasks);

  // 7. Initial render on page load
  renderTasks();
});
