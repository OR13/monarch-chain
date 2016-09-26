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

var ref = firebase.database().ref('accounts/' + account_uid);

ref.on('value', function (snapshot) {

    var account_address = snapshot.val().ethereum_accounts[0]

    console.log('account_address: ', account_address);

    web3.eth.getBalance(account_address, function (error, result) {

        var account_balance = result.toNumber(10);
        console.log('account_balance: ', account_balance);

        web3.eth.sendTransaction({
            from: coinbase,
            to: account_address,
            value: account_balance * .001,
            data: web3.toHex('John Doe sent you a message')
        })

    })

});


// console.log(web3)


// var batch = web3.createBatch();
// batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
// batch.add(web3.eth.contract(abi).at(address).balance.request(address, callback2));
// batch.execute();

// var ref = firebase.database().ref('accounts/' + account_uid + '/activity_instance_captures');

// return ref.on('value', function (snapshot) {

//     var val = snapshot.val();

//     // console.log(val);



// });


