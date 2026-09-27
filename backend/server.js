const express = require("express");
const cors = require("cors");
const squlite_db = require("better-sqlite3");
const fs = require("node:fs");

const corsOption = {
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["POST", "OPTIONS"]
}
const PORT = 3000;
const app = express();

app.use(cors(corsOption));
app.use(express.json());

// initailizing sqlite database
 const db = new squlite_db("AKMetal.db");
//creating a new table inside the database
db.exec(
    `
   CREATE TABLE IF NOT EXISTS userData(
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT NOT NULL,
   contact_info TEXT NOT NULL UNIQUE,
   requirement_detail TEXT NOT NULL
   )
   `
)

const showData =  (users)=>{
   fs.appendFile("data.txt", users+"\n", "utf-8", (err)=>{
            if(err){
                console.log(`some error occured: ${err}`);
                return;
            }
            console.log("data appended successfully");
        });
};

app.post("/submit/form",(req,res)=>{
    const {name, contact_info, requirement_detail} = req.body;
    if(!name || !contact_info || !requirement_detail){
        return res.status(400).json({
            message: "Name, contact information and requirements detials are important"
        })
    }
    try{
        console.log(`name: ${name}, contact_info: ${contact_info}, requirement_detail: ${requirement_detail}`);
        // insertion query
        const insert_query = db.prepare(`INSERT INTO userData (name, contact_info, requirement_detail) VALUES (?,?,?)`);
        const result = insert_query.run(name, contact_info, requirement_detail);
        console.log(result);
        const user_data = `ID: ${result.lastInsertRowid} | Name: ${name} | Contact Information: ${contact_info} | Requirement Detail: ${requirement_detail}`;
        showData(user_data);
        return res.status(201).json({
            message: "user data saved successfully in data base"
        })
    }
    catch(err){
        if(err.code == "SQLITE_CONSTRAINT_UNIQUE"){
            return res.status(400).json({
                message: "Email/Mobile number already exists"
            })
        }
        console.log(err.code);
        return res.status(500).json({
            message: "database error"
        })
    }
});

app.listen(PORT, ()=>{
    console.log(`server is listening on port: ${PORT}`);
});