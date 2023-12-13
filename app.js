const express = require('express');
const app = express()

const port = process.env.PORT || 8081;

app.get('/get', (req, res) => res.send(`Get REST API  on ${port}.`))

app.listen(8080, ()=>{
    console.log(`My REST API running on ${port}`)
})