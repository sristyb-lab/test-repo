document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const todoList = document.getElementById('todoList');
  
    // Add a new task
    addTaskButton.addEventListener('click', () => {
      const taskText = todoInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      // Create a new list item
      const listItem = document.createElement('li');
  
      // Task text
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);
  
      // Delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
      });
      listItem.appendChild(deleteButton);
  
      // Add the list item to the list
      todoList.appendChild(listItem);
  
      // Clear the input
      todoInput.value = '';
    });
  });
  