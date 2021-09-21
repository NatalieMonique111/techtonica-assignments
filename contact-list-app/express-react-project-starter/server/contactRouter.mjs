import express from "express";

import * as db from "./db.mjs";

const contactRouter = express.Router();
contactRouter.use(express.json());

contactRouter.get("/", async (request, response) => {
  const contacts = await db.getContacts();
  response.json(contacts);
});


contactRouter.post("/", async (request, response) => {
  const contacts = await db.addContacts(request.body);
  response.status(201).json(contacts);
});

contactRouter.post("/edit", async (request, response) => {
  const contacts = await db.editContacts(request.body);
  response.status(201).json(contacts);
});

export default contactRouter;
