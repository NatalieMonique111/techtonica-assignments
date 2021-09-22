/* eslint-disable */ 
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Forecast from "./Forecast";
// import Tasks from "./Tasks";


const App = () => (
  <main className="App">
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </main>
);

//removed Task component
const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    
    <Forecast/>
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
