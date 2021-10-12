export default (state, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return {
                ...state,
            }
        
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.task],
            }
        case 'COMPLETED_TASK':
            return {
                ...state,
                tasks: [...state.task, action.task],
            }
            case 'DELETE_TASK':
                return {
                    ...state,
                    tasks:[...state.tasks, action.task],
                }
        default:
            return state
    }
}