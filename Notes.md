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
