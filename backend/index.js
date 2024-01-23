require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `Client requested ${req.method} method in "${
      req.path
    }" path on ${new Date().toLocaleString()}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/", (req, res, next) => {
  res.status(404).send("page not found");
  next();
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
