import * as React from "react";

import { Routes, Route } from "react-router-dom";

import AddSighting from "./AddSightings";
import Sightings from "./Sightings";
import * as apiClient from "./apiClient";
import "./styles.css";

const App = () => {
  return (
    <main>
      <nav>
        <h1 className= "heading" to="/"> 𓅺 Endangered Animal Sightings 𓆉</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

const Home = () => {
  const [species, setSpecies] = React.useState([]);
  const [sightings, setSightings] = React.useState([]);
  // TODO: Add hooks/load functions for individuals.

  const loadSpecies = async () => setSpecies(await apiClient.getSpecies());
  const loadSightings = async () => setSightings(await apiClient.getSightings());
  

  React.useEffect(() => {
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
      <AddSighting {...{sightings, setSightings }}/>
    </>
  );
};

export default App;
