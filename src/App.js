import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import { DarkMode } from "./components/DarkMode";

function App() {
  const [darkModeIcon, setDarkModeIcon] = useState(false);
  const toggleIcon = () => {
    setDarkModeIcon(!darkModeIcon);
  };

  const [showForm, setShowForm] = useState(true);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Set time and date for application
  // UseEffect and setInterval both used to rerun function every second 
  const [count, setCount] = useState(new Date().toLocaleString())
  useEffect(() => {
    setInterval(() => {
      setCount(count => new Date().toLocaleString());
    }, 1000);
  });

  // Add task
  // Assign a random ID to our task since there is no DB
  // newTask variable created and to it we assign the random ID and spread our object
  // Lastly we use setTask() to spread our existing tasks into our new object and add our newTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task filters through our Tasks array and filters out the task clicked
  // It matches the id from the parameter with the actual id from the array
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder class when item is double clicked
  // When fired, function will match id of item clicked with the actual id
  // We spread that task across a new object but set the reminder to the opposite of whatever it's currently set to
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <DarkMode darkModeIcon={darkModeIcon} toggleIcon={toggleIcon}/>
      <Header title="ToDo..." onAdd={ () => setShowForm(!showForm)} showAdd={!showForm} />
      <Timer timer={count}/>
      {showForm ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p className="noTasks">"You have no tasks to complete..."</p>
      )}{" "}
    </div>
  );
}

export default App;
