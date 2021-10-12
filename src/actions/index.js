export const getInitialTasks = () => {
    return {
        type: 'GET_TASKS',
    }
}

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task,
    }
}
export const completedTask = (task) => {
    return {
        type: 'COMPLETED_TASK',
        task,
    }
}

export const DeleteClick =(task) => {
    return {
        type: 'DELETE_TASK',
        task,
    }
}
