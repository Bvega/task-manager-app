## Stage 1: Scaffold & Input Form

1. **Create folders & files**  
   - Top-level: `.gitignore`, `README.md`  
   - `src/`: `index.html`, `style.css`, `app.js`  
   - `docs/`: `tutorial.md`, `changelog.md`

2. **HTML boilerplate**  
   - Defined `<!DOCTYPE html>` and `<head>` with charset, viewport, title.  
   - Linked `style.css` and `app.js`.

3. **Added Task Form**  
   - A `<div id="taskForm">` containing:  
     - Text `<input>` for **Task Name**  
     - Text `<input>` for **Category**  
     - Date `<input>` for **Deadline**  
     - `<select>` for **Status** with “In Progress”/“Completed”  
     - `<button>` **Add Task**

4. **Added Task List container**  
   - An empty `<ul id="taskList"></ul>` to display tasks later.

5. **Initialized blank CSS & JS**  
   - `style.css` and `app.js` contain only file‐header comments.
