import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Forecast from "./Forecast";
// import Tasks from "./Tasks";

// const { Header, Content, Footer } = Layout;

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

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    {/* <Tasks /> */}
    <Forecast/>
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
