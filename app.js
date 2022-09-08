const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
// const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
// app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://shivkumar:I81Q7TvA9ObKHdC3@cluster0.ub8d9.mongodb.net/test"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
