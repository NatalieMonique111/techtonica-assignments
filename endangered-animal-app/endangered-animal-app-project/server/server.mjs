import express from "express";
import mime from "mime-types";

import * as db from "./db.mjs";

//////////NOTE////////////
// The primary Express server file. The code in this file:
// -Configures and runs the Express server
// -Sets up routes to handle HTTP requests
// -Processes incoming request and sends back a response
// -Notice we don't interact directly with the database in this file, we delegate those tasks to the db.mjs module.

const app = express();
const port = process.env.PORT || 4000;

///////////TASKS////////////
const tasks = express.Router();

tasks.get("/", async (request, response) => {
  const tasks = await db.getTasks();
  //response.json() converts the JavaScript value to JSON and sends it as a response.
  response.json(tasks);
});

//express.json() converts the incoming request payload (usually via POST or PUT) from a JSON string to a JavaScript value.
tasks.use(express.json());
tasks.post("/", async (request, response) => {
  const { name } = request.body;
  const task = await db.addTask(name);
  response.status(201).json(task);
});

app.use("/api/tasks", tasks);

///////////SPECIES//////////
const species = express.Router();

species.get("/", async (request, response) => {
  const species = await db.getSpecies();
  //response.json() converts the JavaScript value to JSON and sends it as a response.
  response.json(species);
});

//express.json() converts the incoming request payload (usually via POST or PUT) from a JSON string to a JavaScript value.
species.use(express.json());
species.post("/", async (request, response) => {
  const { animal } = request.body;
  const species = await db.addSpecies(animal);
  response.status(201).json(species);
});

app.use("/api/species", species);

////////INDIVIDUALS/////////
const individuals = express.Router();

individuals.get("/", async (request, response) => {
  const individuals = await db.getIndividuals();
  //response.json() converts the JavaScript value to JSON and sends it as a response.
  response.json(individuals);
});

//express.json() converts the incoming request payload (usually via POST or PUT) from a JSON string to a JavaScript value.
individuals.use(express.json());
individuals.post("/", async (request, response) => {
  const { ind } = request.body;
  const individuals = await db.addIndividuals(ind);
  response.status(201).json(individuals);
});

app.use("/api/individuals", individuals);

///////////SIGHTINGS/////////
const sightings = express.Router();

sightings.get("/", async (request, response) => {
  const sightings = await db.getSightings();
  //response.json() converts the JavaScript value to JSON and sends it as a response.
  response.json(sightings);
});

//express.json() converts the incoming request payload (usually via POST or PUT) from a JSON string to a JavaScript value.
sightings.use(express.json());
sightings.post("/", async (request, response) => {
  const { seen } = request.body;
  const sightings = await db.addSightings(seen);
  response.status(201).json(sightings);
});

app.use("/api/sightings", sightings);

////////////////////////////////
app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

if (process.env?.SERVE_REACT?.toLowerCase() === "true") {
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

  app.get("*", (req, res) => {
    res.sendFile("/app/index.html");
  });
}

app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
