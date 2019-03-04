const express = require('express')
const app = express()

// - Connect to Database MySQL
const mysql = require('mysql')
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'Plantae'
})
db.connect()
db.on('error',(e)=>{
    console.error(e)
})
    
// - Get Data from Table Monocotyledon
app.get('/flora/monokotil', (req,res)=>{
    var Monoco = 'SELECT * FROM Monocotyledon';
    db.query(Monoco, (err, result)=>{
    if(err) throw err
// - Printout at Body Browser and Console
        console.log(result)
        res.send(result)
    }) 
})

// - Get Data from Table Dicotyledon
app.get('/flora/dikotil', (req,res)=>{
    var Dico = 'SELECT * FROM Dicotyledon';
    db.query(Dico, (err, result)=>{
    if(err) throw err
// - Printout at Body Browser and Console    
        console.log(result)
        res.send(result)
    }) 
})
// - Connect to Database MongoDB
const MongoCl = require('mongodb').MongoClient
const url = 'mongodb://bstd:inipassword@localhost:27017/Animalia'

// Connect and Get Data
// - Get Data from Collection Vertebrata
app.get('/fauna/vertebrata', (req, res)=>{
    MongoCl.connect(url, (error, callback)=>{
    var collection = callback.db('Animalia').collection('Vertebrata');
        collection.find({}).toArray((err,result)=>{
// - Printout at Body Browser and Console
            console.log(result)
            res.send(result)
        })
    })
})

// - Get Data from Collection Invertebrata
app.get('/fauna/invertebrata', (req, res)=>{
    MongoCl.connect(url, (error, callback)=>{
    var collection = callback.db('Animalia').collection('Invertebrata');
        collection.find({}).toArray((err,result)=>{
// - Printout at Body Browser and Console
            console.log(result)
            res.send(result)
        })
    })
})
app.listen(3050, ()=>{
    console.log('Server Active !!')
    console.log('Click this link ==>  http://localhost:3050/flora/monokotil atau')
    console.log('Click this link ==>  http://localhost:3050/flora/dikotil atau')
    console.log('Click this link ==>  http://localhost:3050/fauna/vertebrata atau')
    console.log('Click this link ==>  http://localhost:3050/fauna/invertebrata')
})