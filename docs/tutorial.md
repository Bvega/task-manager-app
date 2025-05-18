# Tutorial: Building the Task Manager App

## Stage 1: Scaffold & Input Form
1. **Create folders & files**  
   - Top-level: `.gitignore`, `README.md`  
   - `src/`: `index.html`, `style.css`, `app.js`  
   - `docs/`: `tutorial.md`, `changelog.md`
2. **HTML boilerplate**  
   - Set `<!DOCTYPE html>` and `<head>` with charset, viewport, title.  
   - Link `style.css` and `app.js`.  
3. **Add Task Form**  
   - Insert `<div id="taskForm">` with inputs for **Task Name**, **Category**, **Deadline**, a **Status** dropdown, and an **Add Task** button.  
4. **Add List Container**  
   - Add `<ul id="taskList"></ul>` below the form to display tasks.

## Stage 2: Capture Inputs & Store Tasks
1. **tasks array**  
   - In `app.js`, declare `const tasks = [];`.  
2. **Reference DOM elements**  
   - Use `document.getElementById` to grab each input and button.  
3. **Event listener**  
   - On `addTaskBtn` click, read input values.  
4. **Create task object & push**  
   - Build `{ name, category, deadline, status }` and `tasks.push(task)`.  
5. **Reset form**  
   - Clear inputs and reset status to *In Progress*.

## Stage 3: Render Tasks to the Page
1. **renderTasks()**  
   - Clears `<ul>` via `innerHTML = ""`.  
   - Loop through `tasks`, create `<li>`, set `innerHTML` to show details, append to `<ul>`.  
2. **Invoke**  
   - Call `renderTasks()` after adding a task.

## Stage 4: Status Dropdown & Auto-Overdue Logic
1. **Auto-overdue**  
   - Compare `task.deadline` to today's date; if past and not *Completed*, set `status = "Overdue"`.  
2. **Dropdown per task**  
   - In `renderTasks()`, build a `<select>` for each task with options *In Progress*, *Completed*, *Overdue*, marking current status selected.  
3. **Update on change**  
   - Attach `change` listeners to each dropdown to update `tasks[index].status` and re-render.

## Stage 5: Filtering by Status & Category
1. **Add filters**  
   - In HTML, add two `<select>` elements: `#statusFilter` and `#categoryFilter`.  
2. **Rebuild categories**  
   - In `renderTasks()`, generate unique categories from `tasks` to populate `#categoryFilter`.  
3. **Apply filters**  
   - Skip rendering tasks that don't match selected status or category.  
4. **Listeners**  
   - On filter `change`, call `renderTasks()`.

## Stage 6: Persist with localStorage
1. **Load on start**  
   - `const tasks = JSON.parse(localStorage.getItem("tasks")) || [];`.  
2. **saveTasks()**  
   - Store `tasks` via `localStorage.setItem("tasks", JSON.stringify(tasks))`.  
3. **Invoke**  
   - After adding a task, status change, or auto-overdue, call `saveTasks()`.  
4. **Initial render**  
   - Call `renderTasks()` on page load.

## Stage 7: Styling with Warm Palette
1. **body styles**: Soft ivory background, warm brown text.  
2. **Form & filters**: Flex layout, coral borders, peach inputs.  
3. **Buttons**: Warm orange with hover effect.  
4. **Task list**: Coral cards, accent bars, rounded corners.

## Stage 8: Removing Tasks
1. **Remove button injection**  
   - In `renderTasks()`, for each `<li>`, append a `<button class="remove-btn" data-index="${index}">Remove</button>`.  
2. **Delete logic**  
   - After rendering, attach `click` listeners to `.remove-btn` elements.  
   - In the handler, use `tasks.splice(index, 1)` to remove the task from the array.  
3. **Persist & re-render**  
   - Call `saveTasks()` then `renderTasks()` after deletion to update UI and storage.  
