/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./config/bemanager-aa981-firebase-adminsdk-jr37u-21c6880736.json');
const createUser = require('./createUser');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

exports.createUser = functions.https.onRequest(createUser);
