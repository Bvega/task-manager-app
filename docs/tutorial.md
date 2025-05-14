## Stage 2: Capture Inputs & Store Tasks

1. **Initialize tasks array**  
   - In `src/app.js`, create `const tasks = [];` to hold all task objects.

2. **Reference DOM elements**  
   - Use `document.getElementById` to grab each input (`taskName`, `taskCategory`, `taskDeadline`, `taskStatus`) and the `addTaskBtn`.

3. **Add event listener**  
   - On `addTaskBtn.click`, read values from each input and dropdown.

4. **Build task object**  
   - Create `{ name, category, deadline, status }` using the captured values.

5. **Push to array**  
   - Use `tasks.push(task)` to store the new task.

6. **Reset form**  
   - Clear input fields and reset status dropdown to “In Progress”.

7. **Verify**  
   - `console.log(tasks)` to confirm tasks are being stored correctly.
