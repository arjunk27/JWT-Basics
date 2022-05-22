const express = require("express");
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(express.json());

//routes

app.get("/", (req, res) => res.send("Welcome to JWT-Basics"));
app.use(require("./routes"));
app.use(require("./middleware/error-handler"));
app.use(require("./middleware/not-found"));

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
startServer();
