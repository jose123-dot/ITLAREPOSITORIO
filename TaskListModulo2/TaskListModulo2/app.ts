const tasks: ITask[] = JSON.parse(localStorage.getItem('tasks') || '[]');

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
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onclick="editTask(${task.id})">Edit</button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="deleteTask(${task.id})">Delete</button>
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
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function editTask(id: number) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        const updatedTitle = prompt('Enter the updated task title:', tasks[taskIndex].title);
        const updatedDescription = prompt('Enter the updated task description:', tasks[taskIndex].description);
        const updatedDueDate = prompt('Enter the updated due date:', tasks[taskIndex].dueDate);

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title: updatedTitle || tasks[taskIndex].title,
            description: updatedDescription || tasks[taskIndex].description,
            dueDate: updatedDueDate || tasks[taskIndex].dueDate
        };

        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    } else {
        alert('Task not found');
    }
}

function deleteTask(id: number) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    } else {
        alert('Task not found');
    }
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



