import { Router } from "express";
import {
  createdMessage,
  getAllMessage,
} from "../controller/message.controller.js";

const messageRoute = Router();

messageRoute.post("/messages", async (req, res) => {
  const { sender_id, receiver_id, description } = req.body;
  const message = await createdMessage(sender_id, receiver_id, description);
  res.status(201).json({
    message: "Message sent successfully",
    message,
  });
});

messageRoute.get("/messages", async (req, res) => {
  const message = await getAllMessage();
  res.status(200).json({ message });
});

export { messageRoute };
