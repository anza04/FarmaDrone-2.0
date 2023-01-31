import express from "express";

const app = express();
import db from './config.js';


app.get("/api", (req, res)=>{
    db.query("SELECT * FROM anagrafica_utente", (err,result)=>{
        if (err) {console.log(err)}
        res.send(result);
    });
})

app.listen(5000, ()=>{console.log("listening....")});
