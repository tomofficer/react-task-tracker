import { useState } from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';

const App = () => {

  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30 pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30 pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30 pm',
            reminder: false,
        },
    ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}



export default App;
