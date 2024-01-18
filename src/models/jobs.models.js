export default class JobsModel{
    constructor(id,name,tech,address,salary,skills){
        this.id = id
        this.name = name
        this.tech = tech
        this.address = address
        this.salary = salary
        this.skills = skills
        
    }
    static getAll(){
        if(jobList.length==0){
            return null
        }
        else{
            return jobList
        }
    }
    static getJobData(id){
        if(this.getAll()!=null){
            const data = jobList.find((jobData)=>jobData.id==id)
            return data
        }
        else{
            return null;

        }
    }
}

const jobList = [new JobsModel(1,"Coding Ninjas","SDE","Gurgaon HR IND Remote","14-20lpa",["REACT","NodeJs","JS","SQL","MongoDB","Express","AWS"]),
new JobsModel(2,"Go Digit","Angular Developer","Pune IND on-Site","6-10lpa",["Angular","JS","SQL","Mongo"]),
new JobsModel(3,"Juspay","SDE","Bangalore IND","20-26lpa",["REACT","NodeJs","JS","SQL","MongoDB","Express","AWS"])
]