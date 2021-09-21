import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import ContactDetail from "./ContactDetail";
import Contacts from "./Contacts";
import Tasks from "./Tasks";


const App = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contacts/:contact_id" element={<ContactDetail />}/>
          
    </Routes>

  </main>
);

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Tasks />
    <Contacts />
    {/* <ContactDetail /> */}
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
