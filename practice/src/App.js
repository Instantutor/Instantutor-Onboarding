import {useState} from 'react';
import Button from "./components/Button";
import Tasks from './Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Byeeeeeeee!"
    },
    {
      id: 2,
      text: "Crikey."
    },
    {
      id: 3,
      text: "Oh wow. Sports..."
    }
  ])

  return (
    <>
      <Button color='black' text='ksdkfj' />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
