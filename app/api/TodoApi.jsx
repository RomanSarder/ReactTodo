let TodoApi = {
    filterTodos(todos, showCompleted, searchText) {
        let filteredTodos = todos;
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        filteredTodos = filteredTodos.filter((todo) => {
            let text = todo.text.toLowerCase();
            searchText = searchText ? searchText.toLowerCase() : searchText;
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
        

        return filteredTodos;
    }
}
    
    export default TodoApi;
