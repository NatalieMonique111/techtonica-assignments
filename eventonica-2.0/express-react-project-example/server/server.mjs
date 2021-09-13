import express from "express";
import mime from "mime-types";

import * as db from "./db.mjs";

const app = express();
const port = process.env.PORT || 4000;

const events = express.Router();

events.get("/", async (request, response) => {
  const events = await db.getEvents();
  response.json(events);
});

events.use(express.json());
events.post("/", async (request, response) => {
  const event = await db.addEvent(request.body);
  response.status(201).json(event);
});

app.use("/api/events", events);

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
