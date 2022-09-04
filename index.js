const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/v1/user.route");

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// BASIC ROOT ROUTE
app.get("/", (req, res) => res.send("Server running..."));

// USER ROUTE
app.use("/user/", userRoute);

// NOT FOUND ROUTE
app.all("*", (req, res) => {
  res.send("Route Not Found");
});

app.listen(5000, () => console.log("Server runing port 5000"));
