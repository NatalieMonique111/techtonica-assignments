import express from "express";

import * as db from "./db.mjs";

const contactRouter = express.Router();

contactRouter.get("/", async (request, response) => {
  const contacts = await db.getContacts();
  response.json(contacts);
});

contactRouter.use(express.json());
contactRouter.post("/", async (request, response) => {
  const contact = await db.addContact(request.body.name);
  response.status(201).json(contact);
});

export default contactRouter;
