import express from "express";
import { testConnection } from "./database/connection.js";
import { userRoute } from "./routes/user.route.js";
import { messageRoute } from "./routes/message.route.js";

const app = express();
const port = 3003;

app.use(express.json());

app.use(userRoute);
app.use(messageRoute);

app.use(port, () => {
  testConnection();
  console.log("Server running in port " + port);
});
