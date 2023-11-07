import React, { useState } from 'react';
import Task from './Tasks';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

export default function Form() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), nom: 'Film' },
    { id: uuidv4(), nom: 'Voyage' },
    { id: uuidv4(), nom: 'Montagne' },
  ]);
  const [task, setTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const addtask = () => {
    let newtasks = [...tasks];
    let newtask = { id: uuidv4(), nom: task };
    newtasks.push(newtask);
    setTasks(newtasks);
    setTask('');
  };

  const supprimertask = (idp) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task ?");
    if (confirmDelete) {
      let novotask = tasks.filter((t) => t.id !== idp);
      setTasks(novotask);
    }
  };

  const startEditingTask = (taskId) => {
    const taskToEdit = tasks.find((t) => t.id === taskId);
    setEditingTask(taskId);
    setEditedTask(taskToEdit.nom);
  };

  const saveEditedTask = (taskId) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, nom: editedTask } : t
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div className="container">
      <h1>Todo List App</h1>
      <form>
        <input
          id="a"
          placeholder="Enter a task ..."
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <input type="button" onClick={addtask} value="Add"></input>
      </form>
      <br />
      <ul>
        {tasks.map((t) => (
          <span key={t.id}>
            <Task deletefunction={() => supprimertask(t.id)} txt={t.nom} className={`task${editingTask === t.id ? ' editing' : ''}`} />
            {editingTask === t.id ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={() => saveEditedTask(t.id)}>Save</button>
              </>
            ) : (
              <button onClick={() => startEditingTask(t.id)}>Edit</button>
            )}
          </span>
        ))}
      </ul>
    </div>
  );
}
