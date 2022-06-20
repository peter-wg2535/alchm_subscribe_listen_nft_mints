const {createAlchemyWeb3} = require("@alch/alchemy-web3")
require("dotenv").config

const alchemyApiKey = process.env.API_KEY
const nftContractAddress="0xbd34d145fcfd3992a0def1057891d51339a90128"
const mintTopic= "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
const zeroTopic="0x0000000000000000000000000000000000000000000000000000000000000000"

const web3=createAlchemyWeb3("wss://eth-rinkeby.alchemyapi.io/v2/"+alchemyApiKey)

const nftMintEventsData={

    address: nftContractAddress,
    topics:[mintTopic,zeroTopic]
}
// function for doing someting
//Add whatever logic you want to run upon mint events.
const doSomethingWithTxn = (txn) => console.log(txn);

// https://docs.alchemy.com/alchemy/enhanced-apis/subscription-api-websockets#subscription-types
//alchemy_newFullPendingTransactions ,alchemy_filteredNewFullPendingTransactions,
//newPendingTransactions,newHeads,logs
//web3.eth.subscribe("logs",nftMintEventsData).on("data",doSomethingWithTxn )
web3.eth.subscribe("logs",nftMintEventsData).on("data",(data)=>console.log(data));

/*
Feel free to visit the verified contract code for the HackrDAO NFTs on Rinkeby 
and executing a mint call while running the above script. Once the mint transaction is mined, 
you should see an event logged to your console that 
mint at https://rinkeby.etherscan.io/address/0xbd34d145fcfd3992a0def1057891d51339a90128#writeContract

*/