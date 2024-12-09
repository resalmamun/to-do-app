// Array to store tasks
let tasks = []

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput').value.trim()
  const contactInput = document.getElementById('contactInput').value.trim()
  const timeInput = document.getElementById('timeInput').value

  if (taskInput === '' || contactInput === '' || timeInput === '') {
    alert('Please fill in all fields!')
    return
  }

  const task = {
    message: taskInput,
    skypeId: contactInput,
    time: timeInput,
    id: new Date().getTime(), // Unique ID for the task
  }

  tasks.push(task)
  displayTasks()

  // Clear inputs after adding the task
  document.getElementById('taskInput').value = ''
  document.getElementById('contactInput').value = ''
  document.getElementById('timeInput').value = ''
}

// Function to display all tasks
function displayTasks() {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = '' // Clear the list before re-rendering

  tasks.forEach((task) => {
    const taskItem = document.createElement('li')
    taskItem.innerHTML = `
            <span>
                <strong>Message:</strong> ${task.message} <br>
                <strong>Skype ID:</strong> ${task.skypeId} <br>
                <strong>Time:</strong> ${task.time}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `
    taskList.appendChild(taskItem)
  })
}

// Function to delete a task
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId)
  displayTasks()
}

// Optional: Function to edit a task (can be expanded later)
function editTask(taskId) {
  const task = tasks.find((task) => task.id === taskId)
  if (task) {
    document.getElementById('taskInput').value = task.message
    document.getElementById('contactInput').value = task.skypeId
    document.getElementById('timeInput').value = task.time
    deleteTask(taskId) // Remove the task first
  }
}
