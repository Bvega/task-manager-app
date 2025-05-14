# Task Manager App

## Overview
A dynamic web application for managing tasks. Users can add tasks with a name, category, deadline, and status; update statuses; automatically mark overdue tasks; filter tasks by status or category; and persist data using localStorage.

## Features
- **Add Tasks**: Input task name, category, deadline, and initial status.
- **Render Tasks**: Display tasks dynamically in a list.
- **Status Updates**: Change task status via dropdown; automatic “Overdue” marking.
- **Filtering**: Filter by status (“All”, “In Progress”, “Completed”, “Overdue”) and category.
- **Persistence**: Save tasks in localStorage for data persistence across page loads.
- **Styling**: Warm color palette with a responsive, user-friendly interface.

## Project Structure
# Task Manager App

## Overview
A dynamic web application for managing tasks. Users can add tasks with a name, category, deadline, and status; update statuses; automatically mark overdue tasks; filter tasks by status or category; and persist data using localStorage.

## Features
- **Add Tasks**: Input task name, category, deadline, and initial status.
- **Render Tasks**: Display tasks dynamically in a list.
- **Status Updates**: Change task status via dropdown; automatic “Overdue” marking.
- **Filtering**: Filter by status (“All”, “In Progress”, “Completed”, “Overdue”) and category.
- **Persistence**: Save tasks in localStorage for data persistence across page loads.
- **Styling**: Warm color palette with a responsive, user-friendly interface.

## Project Structure

task-manager-app/
├── docs/
│ ├── tutorial.md # Step-by-step tutorial
│ └── changelog.md # Changelog of feature stages
├── src/
│ ├── index.html # Main HTML file
│ ├── style.css # CSS styling
│ └── app.js # JavaScript logic
├── .gitignore # Ignored files
└── README.md # Project overview and instructions

## Setup
1. **Clone the repository**  
   ```bash
   git clone https://github.com/YourUsername/task-manager-app.git
   cd task-manager-app
Open the app

In your browser, open src/index.html.

Usage
Add a Task: Fill in all fields and click Add Task.

Update Status: Use the dropdown next to each task to mark as In Progress, Completed, or Overdue.

Filter: Select options from Status and Category filters to narrow displayed tasks.

Persistence: Your tasks are saved automatically; reload the page and see them retained.

Reflection
(100–200 words)
During development, I learned how to structure a dynamic JavaScript application by progressively building features in stages. Managing the tasks array and updating the DOM in real time highlighted the importance of modular code. Implementing filters and localStorage persistence taught me to think about user experience and data lifecycle. In future iterations, I would add input validation, error handling, and tests to ensure robustness.