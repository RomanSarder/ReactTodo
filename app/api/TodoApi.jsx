
module.exports = {
    setTodos: function(todos) {
        if(Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e);
        }

        return Array.isArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, searchText) {
        let filteredTodos = todos;
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        return filteredTodos;
    }
}