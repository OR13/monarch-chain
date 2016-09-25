console.log('begin program...');

var firebase = require("firebase");



var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var account_uid = '7fSbLfSmQMcSzlGvTPqAE07Wpcy2';


firebase.initializeApp({
    serviceAccount: process.env.FB_MONARCH_CHAIN_SERVICE_ACCOUNT,
    databaseURL: "https://transmute-industries.firebaseio.com"
});

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

console.log(web3)

// var ref = firebase.database().ref('accounts/' + account_uid + '/activity_instance_captures');

// return ref.on('value', function (snapshot) {

//     var val = snapshot.val();

//     // console.log(val);



// });


