import { Router } from "express";
import { createdUser, getAllUsers } from "../controller/user.controller.js";

const userRoute = Router();

userRoute.post("/users", async (req, res) => {
  const user = await createdUser(req.body);
  res.status(201).json({
    message: "User created successfully",
    user,
  });
});

userRoute.get("/users", async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json({ users });
});

export { userRoute };
