const {MongoClient} = require('mongodb')
const faker=require('faker')
const MONGO_URL =  "mongodb+srv://samad1786:sparks789@cluster0.xwlpu.mongodb.net/dbuser"


MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw err
  }

  const dbuser = client.db("dbuser")
  const users = dbuser.collection("users")
  const transactions=dbuser.collection("transactions")

  users.insertMany([
    {
      name: "Jittu",
      Account_balance: 30000,
      Email_id: "jittu@gmail.com",
      FatherName:"Jittu's Dad"
      
    },
    {
        name: "Shubham",
        Account_balance: 300456,
        Email_id: "shubham@gmail.com",
      FatherName:"Shubham's Dad"
      },
      {
        name: "Raghav",
        Account_balance: 200199,
        Email_id: "raghav@gmail.com",
      FatherName:"Raghav's Dad"
      },
      {
        name: "Anant",
        Account_balance: 4005,
        Email_id: "anant@gmail.com",
      FatherName:"Anant's Dad"
      },
      {
        name: "Rishabh",
        Account_balance: 1000,
        Email_id: "rishabh@gmail.com",
      FatherName:"Rishabh's Dad"
      },
      {
        name: "Sameer",
        Account_balance: 20007,
        Email_id: "sameer@gmail.com",
      FatherName:"Sameer's Dad"
      },
      {
        name: "Nimish",
        Account_balance: 30780,
        Email_id: "nimish@gmail.com",
      FatherName:"Nimish's Dad"
      },
      {
        name: "Dhruv",
        Account_balance: 5000,
        Email_id: "druv@gmail.com",
      FatherName:"Dhruv's Dad"
      },
      {
        name: "Harsh",
        Account_balance: 6008,
        Email_id: "harsh@gmail.com",
      FatherName:"Harsh's Dad"
      },
      {
        name: "Gaurav",
        Account_balance: 3076,
        Email_id: "gaurav@gmail.com",
      FatherName:"Gaurav's Dad"
      },
  ], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("DATA INSERTED")
  })
})