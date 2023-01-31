import express from "express";

const app = express();
import db from './config.js';


app.get("/api", (req, res)=>{
    db.query("SELECT * FROM anagrafica_utente", (err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.listen(5000, ()=>{console.log("listening....")});
