/* Important 
What ever we will be doing using Express, is in back done using http package, but the difference is Express provide more of simple and abstracted version of enviroment to create servers and stuff
*/

const Express = require("express");
const morgan = require("morgan")
const app = Express();

const Connection= require("./config/db")
const UsrModle= require("./models/user") //The modle with schema of the datatbase
// get Express
// No need to make server explicitly, Express would do that implicitly 😁

app.set("view engine", "ejs");
// Set up the view engine

/* Middlewares: This are functions which are executed on the request before getting to any route
 Generally the middleware would be run request getting any route but u can make middleware to act for a single route also
 Just by adding the function before the actual or "main" function of the route.
*/

// Built-in Middleware
app.use(Express.json()) // As Express cant read req.body, we use this 2 built-in middleware
app.use(Express.urlencoded({extended:true}))
app.use(Express.static("public"))

// Third Party Middleware
app.use(morgan('dev')) // Its a middleware(here its a logger) whose func. is to console.log what request has been made

// Custom Middleware
app.use((req, res, next) => {
  console.log("first the middleware has run");
  next();
  // We have to write this or else the flow o fcode would stop here only and wont run any route as the middlewares are in between the request and the routes
});

// Routes
app.get("/", (req, res) => {
  res.render("index"); // This will render the "index.ejs" of views folder at / route of 3000 port
});

// Route with personal middleware
app.get("/One",
  (req,res,next) => {// middleware
    console.log(
      "Welcome to the One, enjoy the page, I am the middleware through which u are passed"
    );
    next();
  },
  (req, res) => {// main function
    res.send("Hello from One"); // We can use res.end, but not prefered
  }
);
// set your routes using ".get()" or ".post()"

// Routes doing Form Control
app.get("/form",(req,res)=>{
    res.render("form") // REnder the form 
})
app.post("/give-me-the-form-details",(req,res)=>{ // using the post to get the data without being seen on url
    console.log(req.body) // as using .post, the data will be in here, if used .get then it would be req.query
    // Express cant read req.body, so we use built in middlewares line 20 and 21
    res.send("data recived ✌🏻")
})



app.listen(3000);
// assign it port
