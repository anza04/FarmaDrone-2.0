import express from "express";

const app = express();
import db from './config.js';

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/credentials", (req, res)=>{
    db.query("SELECT * FROM credenziali_utente, anagrafica_utente", (err,result)=>{
        if (err) {console.log(err)}
        res.send(result);
    });
})

app.listen(5000, ()=>{console.log("listening....")});
