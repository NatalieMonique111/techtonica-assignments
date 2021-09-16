// apiClient.js
// The functions in this module are responsible for talking to the Express API server.
// We use the browser built-in fetch function to perform the HTTP communication.
// Notice that we always translate the reponse from JSON to JavaScript object using the Body.json() method.

//////////TASKS////////////
export const getTasks = async () => {
  const response = await fetch("/api/tasks");
  return response.json();
};

export const addTask = async (name) => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

//////// SPECIES////////////
export const getSpecies = async () => {
  const response = await fetch("/api/species");
  return response.json();
};

export const addSpecies = async (animal) => {
  const response = await fetch("/api/species", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animal),
  });
  return response.json();
};

////////INDIVIDUALS////////
export const getIndividuals = async () => {
  const response = await fetch("/api/individuals");
  return response.json();
};

export const addIndividuals = async (ind) => {
  const response = await fetch("/api/individuals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ind),
  });
  return response.json();
};

////////SIGHTINGS////////
export const getSightings = async () => {
  const response = await fetch("/api/sightings");
  return response.json();
};

export const addSightings = async (seen) => {
  const response = await fetch("/api/sightings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(seen),
  });
  return response.json();
};
