require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const usersRoutes = require("./src/routes/users");
const recipesRoutes = require("./src/routes/recipes");
const cors = require("cors");
const port = process.env.PORT || 3000;

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

app.use("/users", usersRoutes);
app.use("/recipes", recipesRoutes);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/", (req, res, next) => {
  res.status(404).send("page not found");
  next();
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(
    console.log("Connected MongoDB successfully"),
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    })
  )
  .catch((err) => console.log(err));
