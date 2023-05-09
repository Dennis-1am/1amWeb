import React, { useState } from 'react'
import './App.css'
import List from './components/List'
import Tasks from './components/Tasks'
import Counter from './components/Counter'


const [counter, setCounter] = useState(0);

const handleCheckboxChange = (event : any) => {
  if (event.target.checked) {
    setCounter(counter + 1);
  } else {
    setCounter(counter - 1);
  }
};

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Task Manager</h1>
            <Counter count={0} />
          </div>
          <div className="col">
            <List.ListConstructor name="Tasks" list={[<Tasks.TasksConstructor name="To Do Task" />, <Tasks.TasksConstructor name="To Do Task" />]} />
          </div>
          <div className="col">
            <List.ListConstructor name="Completed" list={[<Tasks.TasksConstructor name="Completed Task" />]} />
          </div>
        </div>
      </div>

    </div>
  )
}