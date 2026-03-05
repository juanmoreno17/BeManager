const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');

// Producción: credenciales del entorno (Cloud Functions).
// Local: usar Firebase Emulator o credenciales via GOOGLE_APPLICATION_CREDENTIALS.
admin.initializeApp();

const db = admin.firestore();

//Handlers
const createUser = require('./createUser');

const createLeagues = require('./createLeagues');
const saveDataToDB = require('./saveDataToDB');
const getLeagues = require('./getLeagues');

const createGameLeague = require('./createGameLeague');
const getMyGameLeagues = require('./getMyGameLeagues');
const getGameLeagues = require('./getGameLeagues');
const joinGameLeague = require('./joinGameLeague');
const startGameLeague = require('./startGameLeague');

const getTeams = require('./getTeams');
const getPlayers = require('./getPlayers');
const getStandings = require('./getStandings');
const getMarket = require('./getMarket');
const getSquad = require('./getSquad');
const getBudget = require('./getBudget');

const makeBid = require('./makeBid');
const sellPlayer = require('./sellPlayer');
const resolveBids = require('./resolveBids');

const updateMarket = require('./updateMarket');
const updateStandings = require('./updateStandings');
const distributeRewards = require('./distributeRewards');
const startRound = require('./startRound');
const endRound = require('./endRound');
const updateValues = require('./updateValues');

//Config
const http = (handler) => onRequest({ region: 'us-central1' }, handler);

//Auth
exports.createUser = http(createUser);

//Leagues (general)
exports.createLeagues = http(createLeagues(db));
exports.saveDataToDB = http(saveDataToDB(db));
exports.getLeagues = http(getLeagues(db));

//Leagues (game)
exports.createGameLeague = http(createGameLeague(db));
exports.getMyGameLeagues = http(getMyGameLeagues(db));
exports.getGameLeagues = http(getGameLeagues(db));
exports.joinGameLeague = http(joinGameLeague(db));
exports.startGameLeague = http(startGameLeague(db));

//Data
exports.getTeams = http(getTeams(db));
exports.getPlayers = http(getPlayers(db));
exports.getStandings = http(getStandings(db));
exports.getMarket = http(getMarket(db));
exports.getSquad = http(getSquad(db));
exports.getBudget = http(getBudget(db));

//Market transactions
exports.makeBid = http(makeBid(db));
exports.sellPlayer = http(sellPlayer(db));
exports.resolveBids = http(resolveBids(db));

//Admin league actions
exports.updateMarket = http(updateMarket(db));
exports.updateStandings = http(updateStandings(db));
exports.distributeRewards = http(distributeRewards(db));
exports.startRound = http(startRound(db));
exports.endRound = http(endRound(db));
exports.updateValues = http(updateValues(db));
