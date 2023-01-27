const SHA256 = require("crypto-js/sha256");
const axios = require("axios");

class Block {
    constructor(index, timestamp, temperature, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.temperature = temperature;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.temperature)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.alarmTriggered = false;
        this.alarmTemperature = 25;
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2020", 20);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.checkTemperature(newBlock);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }

    checkTemperature(newBlock) {
        if (newBlock.temperature > this.alarmTemperature) {
            console.log("Temperature exceeded the limit. Alarm Triggered!");
            this.alarmTriggered = true;
        } else {
            console.log("Temperature is normal.");
            this.alarmTriggered = false;
        }
    }
}

let tempCoin = new Blockchain();

// Fetch temperature data from Provider's API every 3 hours
setInterval(() => {
    axios.get("https://api.provider.com/temperature")
    .then(response => {
        let temperature = response.data.temperature;
        console.log("Current temperature: " + temperature);
        let timestamp = new Date().toLocaleString();
        tempCoin.addBlock(new Block(tempCoin.chain.length, timestamp, temperature));
    })
    .catch(error => {
        console.log(error);
    });
}, 10800000); // 10800000ms = 3 hours
