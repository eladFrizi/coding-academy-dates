console.log('hello world')
var express = require('express');
var app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var gNextEvening = '6 במרץ'
var gNextCourse  = '13 במאי 2013'

app.get('/', function (req, res) {
    res.json({
        nextEvening : gNextEvening,
        nextCourse : gNextCourse
    })
})

app.listen(port, function (){
    console.log('live and running')
})

