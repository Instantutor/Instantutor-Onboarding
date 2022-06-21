import './App.css';
import {useState} from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Tutor Babies',
        day: 'Feb 9th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Pet puppies',
        day: 'Feb 12th at 1:30am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Sleep',
        day: 'Feb 14th at 7:30am',
        reminder: false,
    },    
])

  // Creating a delete funtion

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: ! task.reminder} : task))
    console.log(id)
  }

  const name = 'Dave'
  const x = 7
  const y = true

  return (
    <div className="container">
      <Header/>
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle = {toggleReminder}/>
      ) : (
        'No Tasks to Show'
      )}
      {/* <h1>Hello from James - React tutorial</h1>
      <h2>Hello {name} it has been {49 / x} years since you have turned me on.</h2>
      <h3>Sup, look at this if else: {y ? 'True' : 'False'} </h3> */}
    </div>

    /*
    Can't have any components outside of the Div since that is the singular parent component.
    */
  );
}

export default App;
