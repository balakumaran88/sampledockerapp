const express = require('express')
const app = express();

app.get('/', (req,res) => {
    res.send('Hello Docker Whiz!!')
})

var server =  app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port

    console.log('Sample App is running on http://%s:%s', host,port)
})