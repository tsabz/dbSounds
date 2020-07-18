const express = require('express')
const PORT = process.env.PORT || '5000'
const app = express()
const path = require('path')
// const client = require('client')

//Route 
// app.get('/', (req, res) => {    
//   res.send('root route');
// })
//Static file 
// app.use(express.static(path.join(__dirname, 'client/build')));

//productionmode 
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__clone_dbsounds, 'client/build')));  
// }

app.set("port", PORT);
// const session = require('express-session');

// ** MIDDLEWARE ** //
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

// ** DB LOCAL HOST ** //
var db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : 'dbsounds'
    }
  });

// ** CONTROLLERS ** //
const producers = require('./controllers/producers.js')

// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
// app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'

// app.use(express.static(path.join(__client, 'build')))
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ** APP ROUTES ** // 
// app.get('/', (req, res) => res.send('hello world'))
app.get('/', (req, res) => {res.send("hello world")
})
app.get('/dbsounds', (req, res) => producers.getdbSoundsData(req, res, db))
app.post('/dbsounds', (req, res) => producers.postdbSoundsData(req, res, db))
app.put('/dbsounds', (req, res) => producers.putdbSoundsData(req, res, db))
app.delete('/dbsounds/:id', (req, res) => producers.deletedbSoundsData(req, res, db))
app.listen(PORT, (req, res) => {
  console.log(`server listening on port: ${PORT}`)
  });