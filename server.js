require('dotenv').config()

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser= require('body-parser');
const {pool} = require('./config')
const cors = require("cors");
const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const origin = {
  origin: isProduction ? 'https://localhost:8080' : '*',
}

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(origin));

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get('/addresses', (req, res) => {
    console.log('hitting')
    pool.query('SELECT * FROM addresses', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
});  

app.post('/address', (req, res) => {
    const add = req.body.address
    pool.query('INSERT INTO addresses (address) VALUES ($1)', [ add ], (error, results) => {
        if (error) {
          throw error
        }
        res.status(201).send(`User added with ID`)
    })
//   )
})
  


const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)












// MongoClient.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true, 
//     useCreateIndex: true,
//     useUnifiedTopology: true
//   })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('database');
//     const collection = db.collection('addresses')

//     // Serve index
//     app.get('/', (req, res) => {
//         // Insert code here to hook up vue SPA. This should just be main index and shouldn't need to do any DB or collection work.
//         res.sendFile(path.join(__dirname, '/dist/index.html'))
//     });

//     // Post to Addresses
//     // NOTE: Change vue ajax to pull from this url now
    // app.post('/address', (req, res) => {
    //     console.log(req.body)
    //     collection.insertOne(req.body)
    //     .then(result => {
    //         console.log(result)
    //     }).catch(error => console.log(error))
    // })

//     // Get Addresses
//     // NOTE: Change vue ajax to pull from this url now
    // app.get('/addresses', (req, res) => {
    //     db.collection('addresses').find().toArray()
    //         .then(results => res.send(results))
    //         .catch(err => console.log(err))
    // });
    
// })