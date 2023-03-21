db.task.insertMany([
    {
        users : "Mohanraj",
        codekata : "150",
        attendance : "80%",
        date : "10-sep-2020",
        month : "september",
        topics : "html",
        task_sumbit : "Completed",
        task : "find array of objects",
        company_drives : "Tcs",
        mentors : ["Rupan", "Ragavkumar","Sando"]
    },
    {
        users : "Poovarasu",
        codekata : "80",
        attendance : "60%",
        date : "18-nov-2020",
        month : "November",
        topics : "css",
        task_sumbit : "UnCompleted",
        task : "find prime numbers in an array",
        company_drives : "Dell",
        mentors : ["Rupan", "Ragavkumar","Sando", "Mohan"]
    },
    {
        users : "Sownthar",
        codekata : "70",
        attendance : "90%",
        date : "19-oct-2020",
        month : "Octomber",
        topics : "Javascript",
        task_sumbit : "Completed",
        task : "find LCM of given array",
        company_drives : "wipro",
        mentors : ["Rupan", "Ragavkumar","Sando"]
    },
    {
        users : "Saravanan",
        codekata : "120",
        attendance : "80%",
        date : "24-jul-2020",
        month : "july",
        topics : "Sql",
        task_sumbit : "Completed",
        task : "design imdb database",
        company_drives : "Capegemini",
        mentors : ["Rupan", "Ragavkumar","Sando","Mohan"]
    },
    {
        users : "Vijay",
        codekata : "180",
        attendance : "80%",
        date : "29-dec-2020",
        month : "december",
        topics : ["html","css","java"],
        task_sumbit : "Completed",
        task : "find fibnocis series",
        company_drives : "Google",
        mentors : ["Rupan", "Ragavkumar","Sando"]
    },
])

// 1.Find all the topics and tasks which are thought in the month of October

db.task.find({month: "Octomber"})

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.task.find({"date": {$gt: "15-oct-2020", $lt: "31-oct-2020"}}, {users: 1, date: 1})

// 3.Find all the company drives and students who are appeared for the placement.

db.task.find({}, {users: 1, company_drives: 1})

// 4.Find the number of problems solved by the user in codekata

db.task.find({}, {users:1, codekata:1})

// 5.Find all the mentors with who has the mentee's count more than 15

db.task.aggregate([{$group: {_id:"$users", total_mentors:{$sum:"$mentors"}}}])

// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.task.find({date:{$gt :"15-oct-2020",$lt :"30-oct-2020"}},{user:1,task_submit:"UnCompleted"})


