const uuid = require('node-uuid');
const moment = require('moment');

export let searchTextReducer = (state = '', action) => {
   switch (action.type) {
        case 'SET_SEARCH_TEXT': 
            return action.searchText;
        default: 
            return state;
   };
}
export let showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
}
export let todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    let newCompleted = !todo.completed;
                    let newCompletedAt = newCompleted ? moment().unix() : undefined;
                    return {
                        ...todo,
                        completed: newCompleted,
                        completedAt: newCompletedAt
                    }
                } else {
                    return todo;
                }
            });
        default: 
            return state;
    }
}