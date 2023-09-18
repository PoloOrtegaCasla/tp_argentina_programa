import './App.css';
import { useState } from 'react';
import Task from './componentes/Task';


function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(0);

  //adding Task
  function AddTask() {
    if (task !== "") {
      setTaskList([...taskList, { task, index: `${task}-${Date.now()}` }]);
      setTask('');
    }

    if (editId) {
      const editTask = taskList.find((i) => i.index === editId);
      const updatedTasks = taskList.map((t) => 
        t.index === editTask.index ? t= {index: t.index , task} : {index: t.index, task: t.task}
      )
      setTaskList(updatedTasks);
      setEditId(0);
      return;
    }
  }

  // deleting Todo .
  const deleteTodo = (index) => {
    var newList = taskList;
    newList.splice(index, 1);
    setTaskList([...newList]);
  }

  // Editing Task
  const handleEdit = (index) => {
    const editTask = taskList.find((i) => i.index === index);
    setTask(editTask.task);
    setEditId(index);
  }
  const completada = id => {
    const updatedTasks = task.map(task => {
      if (updatedTasks.id === id) {
        task.completada = !task.completada;
      }
      return task;
    });

  return (
    <div className="tareas-lista-principal">
      <h1 className='title'> lista de tareas </h1>
      <input type='text' value={task} onChange={(e) => { setTask(e.target.value) }} />
      <button onClick={AddTask}> Add </button>

      {taskList.map((task) => {
        return <Task task={task.task} deleteTodo={deleteTodo} index={task.index} handleEdit={handleEdit} completada={completada}  />
      })}

    </div>
  );
}}

export default App;