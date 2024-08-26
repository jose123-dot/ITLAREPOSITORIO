

const tasks: ITask[] = [];

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

function addTask(title: string, description: string, dueDate: string) {
    const newTask: ITask = {
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
taskForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitle = (<HTMLInputElement>document.getElementById('taskTitle')).value;
    const taskDescription = (<HTMLInputElement>document.getElementById('taskDescription')).value;
    const taskDueDate = (<HTMLInputElement>document.getElementById('taskDueDate')).value;
    addTask(taskTitle, taskDescription, taskDueDate);
});





//



