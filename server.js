require('dotenv').config()

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser= require('body-parser');

const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;

const app = express()

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)

MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('database');
    const collection = db.collection('addresses')

    // Serve index
    app.get('/', (req, res) => {
        // Insert code here to hook up vue SPA. This should just be main index and shouldn't need to do any DB or collection work.
        res.sendFile(path.join(__dirname, '/dist/index.html'))
    });

    // Post to Addresses
    // NOTE: Change vue ajax to pull from this url now
    app.post('/address', (req, res) => {
        console.log(req.body)
        collection.insertOne(req.body)
        .then(result => {
            console.log(result)
        }).catch(error => console.log(error))
    })

    // Get Addresses
    // NOTE: Change vue ajax to pull from this url now
    app.get('/addresses', (req, res) => {
        db.collection('addresses').find().toArray()
            .then(results => res.send(results))
            .catch(err => console.log(err))
    });
    
})