// src/app.js
// Task Manager App logic (Feature 8: remove tasks)

document.addEventListener("DOMContentLoaded", () => {
  // 1. Load tasks from localStorage or start empty
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // 2. Reference DOM elements
  const taskNameInput     = document.getElementById("taskName");
  const taskCategoryInput = document.getElementById("taskCategory");
  const taskDeadlineInput = document.getElementById("taskDeadline");
  const taskStatusSelect  = document.getElementById("taskStatus");
  const addTaskBtn        = document.getElementById("addTaskBtn");
  const statusFilter      = document.getElementById("statusFilter");
  const categoryFilter    = document.getElementById("categoryFilter");
  const taskList          = document.getElementById("taskList");

  // 3. saveTasks(): persist the tasks array to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // 4. renderTasks(): updates the UI, handles overdue, filtering, status dropdowns, and remove buttons
  function renderTasks() {
    const statusValue   = statusFilter.value;
    const categoryValue = categoryFilter.value;

    // rebuild category options
    const categories = ["All", ...new Set(tasks.map(t => t.category).filter(c => c))];
    categoryFilter.innerHTML = categories
      .map(cat => `<option value="${cat}"${cat === categoryValue ? " selected" : ""}>${cat}</option>`)
      .join("");

    taskList.innerHTML = "";                            
    const today = new Date().toISOString().split("T")[0];

    tasks.forEach((task, index) => {
      // auto-mark overdue
      if (task.status !== "Completed" && task.deadline < today) {
        task.status = "Overdue";
        saveTasks();
      }

      // apply filters
      if (statusValue !== "All" && task.status !== statusValue) return;
      if (categoryValue !== "All" && task.category !== categoryValue) return;

      // build list item with status dropdown and remove button
      const li = document.createElement("li");
      const statusSelect = `
        <select data-index="${index}">
          <option value="In Progress"${task.status === "In Progress" ? " selected" : ""}>In Progress</option>
          <option value="Completed"${task.status === "Completed" ? " selected" : ""}>Completed</option>
          <option value="Overdue"${task.status === "Overdue" ? " selected" : ""}>Overdue</option>
        </select>
      `;
      li.innerHTML = `
        <div class="task-info">
          <strong>${task.name}</strong> -
          ${task.category} -
          Due: ${task.deadline} -
        </div>
        <div class="task-controls">
          ${statusSelect}
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
      taskList.appendChild(li);
    });

    // wire status-change listeners
    document.querySelectorAll("#taskList select").forEach(sel => {
      sel.addEventListener("change", function() {
        const i = parseInt(this.dataset.index, 10);
        tasks[i].status = this.value;
        saveTasks();
        renderTasks();
      });
    });

    // wire remove-button listeners
    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", function() {
        const i = parseInt(this.dataset.index, 10);
        tasks.splice(i, 1);  // remove this task from array
        saveTasks();         // persist changes
        renderTasks();       // re-render list
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
      alert("Please fill in all fields.");
      return;
    }

    tasks.push({ name, category, deadline, status });
    saveTasks();
    renderTasks();

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
