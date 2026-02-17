import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

// GET / endpoint
// GET / sends the string "Hello employees!".
app.get("/", (req, res) => {
  res.send("Hello employees!");
});
