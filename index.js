const express = require('express')
const morgan = require('morgan')


const app =  express()

app.use(morgan('dev'))

app.get('/' , (req , res) => {
    var userAgent = req.headers['user-agent'];
    // if (userAgent.startsWith('facebookexternalhit/1.1') ||
    //    userAgent === 'Facebot' ||
    //    userAgent.startsWith('Twitterbot') {

    //     /* Do something for the bot */
    // }
    res.status(200).json(userAgent)
})


app.listen( 5000 ,  'localhost' , () => {
  console.log('listening on localhost:5000 ');
})
