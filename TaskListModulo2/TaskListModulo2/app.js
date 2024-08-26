"use strict";
const tasks = [];
function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (taskList) {
        taskList.innerHTML = '';
        tasks.forEach((task) => {
            const taskItem = document.createElement('div');
            taskItem.innerHTML = `
                <div class="bg-gray-100 p-3 rounded mb-2">
                    <p><strong>ID:</strong> ${task.id}</p>
                    <p><strong>Title:</strong> ${task.title}</p>
                    <p><strong>Status:</strong> ${task.status}</p>
                    <p><strong>Due Date:</strong> ${task.dueDate ? task.dueDate : 'Not specified'}</p>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
    }
}
function addTask(title, description, dueDate) {
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status: 'pending',
        dueDate
    };
    tasks.push(newTask);
    renderTasks();
}
const taskForm = document.getElementById('taskForm');
taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDueDate = document.getElementById('taskDueDate').value;
    addTask(taskTitle, taskDescription, taskDueDate);
});
//# sourceMappingURL=app.js.map