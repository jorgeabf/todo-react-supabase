import {useState} from 'react'

function TasksForm() {
const [taskName,setTaskName] = useState('')

  return (
    <form>
      <input type="text" name="taskname" placeholder="Write a task name"/>
    </form>
  )
}

export default TasksForm