interface ITask {
    id: number;
    title: string;
    description?: string;
    status: 'pending' | 'completed';
    dueDate?: string;
}