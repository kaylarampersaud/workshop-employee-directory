import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

// GET / endpoint
// GET / sends the string "Hello employees!".
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// GET /employees endpoint
app.get("/employees", (req, res) => {
  res.json(employees);
});

// GET /employees/random → random employee
// Must be before /employees/:id
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

// GET /employees/:id endpoint
app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  // Find the employee with the given ID
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).send("Employee not found.");
  }

  res.json(employee);
});
