import express from "express";

const app = express();
import db from './config.js';


app.get("/api", (req, res)=>{
    db.query("SELECT * FROM posts", (err,result)=>{
        console.log(err);
    });
})

app.listen(5000, ()=>{console.log("listening....")});
