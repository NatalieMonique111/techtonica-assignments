import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

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
  const [events, setEvents] = React.useState([]);

  const loadEvents = async () => setEvents(await apiClient.getEvents());

  React.useEffect(() => {
    loadEvents();
  }, []);

  return (
    <>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <h2>{process.env.REACT_APP_SUBTITLE}</h2>
      <EventList events={events} />
      <AddEvent loadEvents={loadEvents} />
    </>
  );
};

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

const EventList = ({ events }) => (
  <ul>
    {events.map(({ id, name, category }) => (
      <li key={id}>{name}, {category}</li>
    ))}
  </ul>
);

const AddEvent = ({ loadEvents }) => {
  const [event, setEvent] = React.useState("");
  const [category, setCategory] = React.useState("");

  const canAdd = event !== "";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (canAdd) {
      await apiClient.addEvent(event, category);
      loadEvents();
      setEvent("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        New event:{" "}
        <input onChange={(e) => setEvent(e.currentTarget.value)} value={event} />
      </label>
      <label>
        Category:{" "}
        <input onChange={(e) => setCategory(e.currentTarget.value)} value={category} />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default App;
