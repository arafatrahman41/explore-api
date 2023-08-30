function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))    
}

function displayTodos(todos){
    //get the container
    const todoContainer = document.getElementById('todos-container')
    for(const todo of todos){
     //create the child element
     const todoDiv = document.createElement('div');
     //set innerText or innerHTML
     todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <p>User: ${todo.userId}</p>
        <p>Is Completed: ${todo.completed === true ? 'complete' : 'not complete'}</p>
     `;
     //appendChild
     todoContainer.appendChild(todoDiv);
    }
}

loadTodos();    