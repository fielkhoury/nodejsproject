const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const cors = require("cors");
const PORT = 8080;

try {
  mongoose.connect("mongodb://localhost:27017/epita");
  console.log("Connected to database");
} catch (error) {
  console.log("Error connecting to db" + error);
}
// ROUTES
const todoRoutes = require("./routes/todo.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const usersRoutes = require("./routes/users.routes");

// MIDDLEWARE
app.use(
  session({
    secret: "1234",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);
app.use(cors());
app.use(helmet());
app.use(express.json());

// Adding routes
app.use("/todo", todoRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log("Server running on http://127.0.0.1:" + PORT);
});
