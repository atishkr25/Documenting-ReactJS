import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState(["Take a shower", "Eat dinner", "Wash bike"]);
  const [newTask, setNewTasks] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function handleInputchange(e) {
    setNewTasks(e.target.value);
  }

  function addTasks() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTasks("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTasks();
    }
  };

  function deleteTasks(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    const updatedTasks = [...tasks];
    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    const updatedTasks = [...tasks];
    if (index < tasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  // 🧩 Edit Handlers
  function startEditing(index) {
    setEditIndex(index);
    setEditText(tasks[index]);
  }

  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  function saveEdit(index) {
    if (editText.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editText;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditText("");
    }
  }

  function handleEditKeyPress(e, index) {
    if (e.key === 'Enter') {
      saveEdit(index);
    }
  }

  return (
    <div className="to-do-list">
      <h1>Todo List</h1>

      <div className='inputNadd-container'>
        <input
          type="text"
          placeholder='Enter Your Todo'
          value={newTask}
          onChange={handleInputchange}
          onKeyDown={handleKeyPress}
        />

        <button
          className='add-button'
          onClick={addTasks}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  onKeyDown={(e) => handleEditKeyPress(e, index)}
                />
                <button
                  className='save-button'
                  onClick={() => saveEdit(index)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span className='text'>{task}</span>
                <button
                  className='edit-button'
                  onClick={() => startEditing(index)}>
                  Edit
                </button>
                <button
                  className='delete-button'
                  onClick={() => deleteTasks(index)}>
                  Delete
                </button>
                <button
                  className='move-button'
                  onClick={() => moveTaskUp(index)}
                  disabled={index === 0}>
                  ⬆
                </button>
                <button
                  className='move-button'
                  onClick={() => moveTaskDown(index)}
                  disabled={index === tasks.length - 1}>
                  ⬇
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
