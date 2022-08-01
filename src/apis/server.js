
const express = require('express')
const app = express()
const port = 4000

const patientdata = require('./data/patient.json');
const rmpdata = require('./data/rmp.json');
const doctordata = require('./data/doctor.json');
console.log(rmpdata);

const cors = require('cors');
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.json(rmpdata)
})

app.get('/api/patient', (req, res) => {
  res.json(patientdata)
})

app.get('/api/doctor', (req, res) => {
    res.json(doctordata)
})

app.get('/api/rmp', (req, res) => {
    res.json(rmpdata)
  })
app.listen(port, () => {
  console.log(`Example app listening on porgit bt ${port}`)
})

