import express from "express"
import path from "path"
import ejsLayout from "express-ejs-layouts"
import HomepageController from "./src/controllers/home.controller.js"
import JobController from "./src/controllers/jobs.controller.js"

const jobController = new JobController
const homepageController = new HomepageController()
const app = express()


// To convert req . body data into readable form 
app.use(express.urlencoded({extended:true}))

// saying am gonna use ejslayout here
app.use(ejsLayout)
app.use(express.static("images"))

// Setting the view engine and path for views
app.set("view engine","ejs")
app.set("views",path.join(path.resolve(),"src","views"))


// getting the request
app.get("/",homepageController.getHomepage)
app.get("/jobs",jobController.getJob)
app.get("/job/:number",jobController.getJobdata)

// Posting the request
app.post("/apply/:id",jobController.postApplicantDetails)

app.use(express.static("src/views"));
app.listen(3200, () => {
    console.log("Server is listening at port 3200");
  });

