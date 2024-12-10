/* 
Important:
Everything done using Express is ultimately powered by the `http` package. 
The key difference is that Express provides a simpler and more abstracted environment 
to create servers, handle routes, and manage middleware efficiently.
*/

const express = require("express");
const morgan = require("morgan");
const app = express();

// Database and Models
const connectDB = require("./config/db"); // Connect to the database
const UserModel = require("./models/user"); // Schema for the database

/* 
Express Implicit Server Creation:
No need to explicitly create a server with the `http` package. 
Express handles it for us internally! 😁
*/

// Setting up the View Engine
app.set("view engine", "ejs"); // Enables rendering of .ejs files from the "views" folder

/* 
Middlewares:
Functions that are executed on the request before reaching the route handlers.
They can be global (apply to all routes) or specific to individual routes.
*/

// Built-in Middleware
app.use(express.json()); // Parses incoming JSON payloads and makes them available in `req.body`
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(express.static("public")); // Serves static files from the "public" folder

// Third-Party Middleware
app.use(morgan("dev")); // Logs incoming requests with method, URL, and response time

// Custom Middleware
app.use((req, res, next) => {
  console.log("Custom middleware executed");
  next(); // Ensure the request proceeds to the next middleware or route handler
});

/* 
Routes:
Define your routes using methods like `.get()`, `.post()`, etc.
*/

// Home Route
app.get("/", (req, res) => {
  res.render("index"); // Renders the "index.ejs" file from the "views" folder
});

// Route with a Specific Middleware
app.get(
  "/one",
  (req, res, next) => {
    console.log(
      "Middleware: Welcome to the /one route! Enjoy your visit. 😊"
    );
    next(); // Allow the request to proceed to the main handler
  },
  (req, res) => {
    res.send("Hello from /one!"); // Sends a response
  }
);

// Form Routes and Creating the User In Databse
app.get("/form", (req, res) => {
  res.render("form"); // Renders the "form.ejs" file
});

app.post("/give-me-the-form-details", async (req, res) => {
  console.log(req.body); // Logs the submitted form data
  var { name, email, password} = req.body 
  await UserModel.create({
      name:name,
      email:email,
      password:password
  })
  res.send("Form data received! ✌🏻");
});

// Update Route Example
app.get("/update", (req, res) => {
  UserModel.updateOne({ /* criteria */ }, { /* update fields */ })
    .then(() => res.send("Update successful"))
    .catch((err) => res.status(500).send("Error updating data"));
});

// Start the Server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000 🚀");
});
