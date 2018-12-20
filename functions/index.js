const functions = require('firebase-functions')
const express = require('express')
const app = express()
const users = require('./api/user')
const profiles = require('./api/profile')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.use('/users', users)
app.use('/profile', profiles)

exports.api = functions.https.onRequest(app)
