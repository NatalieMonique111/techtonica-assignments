import express from "express";

import * as db from "./db.mjs";

const playerRouter = express.Router();

playerRouter.get("/", async (request, response) => {
  const players = await db.getPlayers();
  response.json(players);
});

// TODO: Post points to the database. 
playerRouter.use(express.json());
playerRouter.post("/", async (request, response) => {
  const score = await db.addScore(request.body);
  response.status(201).json(score);
});

export default playerRouter;
