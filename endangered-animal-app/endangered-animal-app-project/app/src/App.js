import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Sightings from "./Sightings";
import * as apiClient from "./apiClient";

const App = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

const Home = () => {
  const [tasks, setTasks] = React.useState([]);
  const [species, setSpecies] = React.useState([]);
  const [sightings, setSightings] = React.useState([]);
  // TODO: Add hooks/load functions for sightings and individuals.

  const loadTasks = async () => setTasks(await apiClient.getTasks());
  const loadSpecies = async () => setSpecies(await apiClient.getSpecies());
  const loadSightings = async () => setSightings(await apiClient.getSightings());
  

  React.useEffect(() => {
    loadTasks();
    loadSpecies();
    loadSightings();
  }, []);

  console.log("species:: ", species);
  console.log("sightings:: ", sightings);
  return (
    <>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <h2>{process.env.REACT_APP_SUBTITLE}</h2>
      <Sightings {...{sightings}} />
      <TaskList tasks={tasks} />
      <AddTask loadTasks={loadTasks} />
    </>
  );
};

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

const AddTask = ({ loadTasks }) => {
  const [task, setTask] = React.useState("");

  const canAdd = task !== "";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (canAdd) {
      await apiClient.addTask(task);
      loadTasks();
      setTask("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        New task:{" "}
        <input onChange={(e) => setTask(e.currentTarget.value)} value={task} />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default App;
