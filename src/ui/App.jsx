import './App.css'
import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import TaskItem from './components/TaskItem'


function App() {
  const [tasks, setTasks] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    const getFn = async () => {
      try{
        const val = await window.electron.getTasks()
        setTasks(val)
      } catch(err){
        console.log(err);
        
      }}
    // window.addEventListener('load', getFn)
    getFn()

    return() => window.removeEventListener('load', getFn)
  }, [])

  function handleChange(e){
    setValue(e.currentTarget.value)
  }

  async function createTask(){
    const id = uuid()
    const newTask = {id, text:value}
    const newTasks = await window.electron.createTask(newTask)

    setTasks(newTasks)
    setValue('')
  }

  function onDeleteTask(newTasks){
    setTasks(newTasks)
  }


  return (
    <>
  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
    <div className="px-4 py-2">
      <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    <form className="w-full max-w-sm mx-auto px-4 py-2">
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add a task"
          value={value}
          onChange={handleChange}
        />
        <button
          onClick={createTask}
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Add
        </button>
      </div>
    </form>
    <ul className="divide-y divide-gray-200 px-4">
      {tasks.map(currentTask => <TaskItem key={currentTask.id} data={currentTask} onDelete={onDeleteTask} />)}

      
      
    </ul>
  </div>
</>

  )}

export default App
