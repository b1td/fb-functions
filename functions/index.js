const functions = require('firebase-functions');

// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.Task1 = functions.https.onRequest((request, response) => {
    var name = request.query.name
    var now = new Date()
    response.send("Hello " + name + ". Now is " + now + ".");
});
