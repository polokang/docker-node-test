const express = require('express');
const app = express()


app.get('/get', (req, res) => res.send('hello docer node'))

app.listen(8080, ()=>{
    console.log('My REST API running on port 8080')
})