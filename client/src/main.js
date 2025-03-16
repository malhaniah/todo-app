// Select the necessary DOM elements
const task = document.querySelector("#task");       // The task input element
const tasks = document.querySelector("#tasks");     // The container for task items
const addTasks = document.querySelector("#addTask");  // The add task button

/**
 * Creates a new task item with the provided task name.
 * @param {string} taskName - The name or description of the task.
 * @returns {HTMLElement} The newly created <li> element representing the task.
 */
function NewTask(taskName) {
  // Create a new <li> element for the task
  const li = document.createElement("li");
  li.classList.add("card", "p-4", "gap-3");

  // Create a <span> element to hold the task text so that we don't lose buttons when updating
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskName;
  li.appendChild(taskSpan);

  // Create the Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger");
  li.appendChild(deleteButton);

  // Create the Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("btn", "btn-success");
  li.appendChild(editButton);

  // Add event listener to delete the task when the Delete button is clicked
  deleteButton.addEventListener("click", () => {
    tasks.removeChild(li);
  });

  // Add event listener to enable editing when the Edit button is clicked
  editButton.addEventListener("click", () => {
    // Create a container for the editing UI
    const editTaskContainer = document.createElement("div");

    // Copy attributes from the original <li> to the editing container
    for (const attr of li.attributes) {
      editTaskContainer.setAttribute(attr.name, attr.value);
    }
    // Replace the original <li> with the editing container
    li.parentNode.replaceChild(editTaskContainer, li);

    // Create an input element for editing the task text
    const editTaskInput = document.createElement("input");
    editTaskInput.classList.add("form-control");
    // Pre-fill the input with the current task text
    editTaskInput.value = taskSpan.textContent;
    editTaskContainer.appendChild(editTaskInput);

    // Create a confirm button to save the edited text
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.classList.add("btn", "btn-success");
    editTaskContainer.appendChild(confirmButton);

    // Add event listener to update the task text and restore the original <li> structure
    confirmButton.addEventListener("click", () => {
      // Update the task text in the <span> with the value from the input
      taskSpan.textContent = editTaskInput.value;
      // Replace the editing container with the original <li> that contains the <span> and buttons
      editTaskContainer.parentNode.replaceChild(li, editTaskContainer);
    });
  });

  return li;
}

// Add a new task when the "Add Task" button is clicked
addTasks.addEventListener("click", () => {
  // Append the new task to the tasks container using the value from the task input
  tasks.appendChild(NewTask(task.value));
});
