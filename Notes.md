# Using "npm init -y" at starts the application's development -?
   its will give a package.json file
   "package.json" is very important

# package
A code written by someone else which serves a purpose which can be reused by anyone just by importing that package. In Js this packages are published on npm.

# How to import and use any package

## To import 
To import any package u just go to npm, find it, get its cmd code, copy it and run it in the terminal of the app. 

## To use
Generally how to use it will be given there, but generally

    let abc= require("the-name-of-package-which-u-will-get-recommended-if-done-correctly")

## You will get 2 things generated in the folder after importing any package
i. node_modules - holds the package u got from the cmd
ii. package-lock.json - holds meta details, its for the system
            
# Even if anyone or both "package-lock.json" and "node_modules" gets deleted, till u have "package.json" u can get them just by "npm i"


# How to make a simple Server
To make server where we will have our website

## import http package
    let http = require("http")

## build a server
    We create a instance of server

    let server= http.createServer((req,res) => {
        res.end("welcome to my website") 
        // will execute when u receive a request and ur server response to it, so at end of it u will have the statement
    })

## start the server
    server.listen(3000)

# Routing
    We use routs to have different page on our website

## Basic info
Its just the simple name or branch given at the end of the url after your portNo

/ - Its your home page
/anything - will be your anything page

## See creatingServerUsinghttpPackage.js to see how we create routes

# Nodemon : Its a package which "refelects any updates in code to the server without the hastle of running the app again and again after any change is done in the code"

# Express
    Until now we use simple Js and http package to create server and routes in it, but its not good for Production level shit.

- Express is a framework which makes it easy to create server and routes in it.
- Read this with the 03_ExpressSeServer.js open in side.
- Its built on top of http package, so its at back doing the same we 
- We dont have to make server explicitly, Express will do that by itself.

## To make "routes"
app.get("/route",(req,res)=>{
    // do something
})
app.post("/route",(req,res)=>{
    // do something
})

## Render HTML, i.e using .ejs(Embedded Javascript) files

To render any HTML file we first have to setup "View Engine". There are many(bug, jade, ejs, etc) but we use ejs(Embeded JavaScript)
    
    Here we use .ejs files, they have all the features as of HTML, but to render it on our express server we use .ejs files. You need to setup it by "npm i ejs", but we dont have to require it, we can just start the rendering part of HTML.

We store this html or say ".ejs" files in views folder which we have to create.

### Set up the view engine.
    app.set("view engine", "ejs)

### Render the ejs file in any route.
    res.render("nameOfTheEjsFile-NoExtension")

### MOre topics are: getting data to ejs files from other files and more


## Middlewares

1. Three types of middlewares
    - Custom Middleware
        - General
        - Personal
    - Third Party Middleware
    eg: Morgan, etc
    - Express's Built in Middleware
    eg: .json(), .urlencoded(extended:true)

## Form Control: How to connect and get data from form to backend

### Form and important attributes

1. action: This will hold the route of where to send the data
2. method: default is get
        get: This will send the data to the route but will show that on url
        post: This wont show that on url          
3. name: This is for input, and is usefull as this will be the key holding the value of the field in the object which will be send to the server.

### .get() and .post()

## Linking CSS

As for html files, we created views folder. For CSS and other static files. We will create a public folder
public folder will not only holds CSS but any static file (i.e the user can see without any authentication) like Js,etc

# MongoDB
Mongodb is a database management system which uses no sql system to store and manage data We use mongoose package to manage and operate on Mongodb database.

## Getting mongose package: npm i mongose

## Config the Mongo With the server: 
    Now, like any other external software, we have to also configure Mongodb with our server to operate on it.
    - We can do this by creating a "config" folder and js file inside that folder having connection setup with the database, either locally or from cloud

### Use mongoose
    const mongoose = require("mongoose")
### create the connection
    const connection = mongoose.connect("mongodb://0.0.0.0/dbName").then(()=>{
        //this will generally hold a clg statement to cehck whether the connection is set-up or not.
    })
### export the connection and make it available for the main app.js file
    module.export = connection

## Create the Schema and model from it:
    schema:  Means the structure or the basic fields our database will be having.
    model: It is like an instance of that schema which can be used to create an object having a structure like that schema

### Getting Mongoose
    const mongoose = require("mongoose")
### Declare and build a schema
    const userSchema = new mongoose.Schema({
        field1:type,
    e.g name:String,
        age:Number,
        married:Boolean
    })
### Built a model from the schema
    const userModel = mongoose.model('model name i.e modelName',SchemaName i.e userSchema)
### Export the model
    module.exports = userModel

## Get the Connection and the Model from the Config and the Models folder
    const connection = require("./config/config-file-name")
    const model = require("./models/model-file-name")

## C R U D

### Create
// DEstructure the req.body
var { v1, v2, v3}= req.body 

// Create the value
model.create({
    name:v1,
    email:v2,
    age:v3
})

### Read

1. model.find().then(()=>{
          |       |
          |        ---- This will hold a function to do on the found values
          ---- This will hold the condition to get values satisfying the condition 
    // The function
})

2. model.findOne().then(()=>{
<!-- This will do almost everything as the above one just the differences are -->
})

    1. findOne() will return only one value, and if there are multiple value then it will retuen the first value created.
    
    2. IN case there's no value satisfying the condition, find() will return an empty array
        Whereas findOne will retun u null

### Update

model.findeOneAndUpdate

// Destructure the req.body
var { v1, v2, v3}= req.body
// Update the value
model.updateOne({name:v1},{age:v2}).then(()=>{
    // The function to do on the updated values
    })