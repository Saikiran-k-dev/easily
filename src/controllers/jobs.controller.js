import JobsModel from "../models/jobs.models.js"

export  default class JobController{
    getJob(req,res){
        const jobLists = JobsModel.getAll()
        // console.log(jobLists)
        res.render("jobs",{jobLists:jobLists})
    }
    getJobdata(req,res){
        const id = req.params.number;
        // console.log(id);
        const jobDetails = JobsModel.getJobData(id)
        // console.log(jobData)
        res.render("jobview",{jobDetails:jobDetails})
    }
    postApplicantDetails(req,res){
        const applicantData = req.body
        console.log(applicantData)
        const jobLists = JobsModel.getAll()
        res.render("jobs",{jobLists:jobLists})
    }
}