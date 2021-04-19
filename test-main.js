const SHA256 = require ('crypto-js/sha256');

var dt = new Date();
var timestamp = dt.toString();

//Models
//- Block classs
//- Blockchasin class
//- Account Model
//- Validator Class
//- Stake Model
//- Transaction Class
//- Transaction Pool
//- Wallet
//- P2P Server
//- APIs

class Block{
    constructor(index, timestamp, data, validator, signature, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.validator = validator;
        this.signature = signature;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    //Remember to add the validator and the signature later on (this.validator + this.signature +)
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        //This is responsible for creating the first Block on the Blockchain
        return new Block(0, "01/01/2021", "Genesis Block", "blockmec");
    }

    getLatestBlock(){
        //Gets the value of the latest block
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        //Adds a new Block to the chain
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        //Check validity of the chain
        if(JSON.stringify(this.chain[0]) !== JSON.stringify(this.createGenesisBlock())){
            return false;
        }
        for(let i = 1; i < this.chain.length; i++){
            
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
}

let blockmec = new Blockchain();
blockmec.addBlock(new Block(1, timestamp, {amount: 2}));
blockmec.addBlock(new Block(2, timestamp, {amount: 57}));

console.log('is blockchain valid? : ' + blockmec.isChainValid());
console.log(JSON.stringify(blockmec, null, 7));

//blockmec.chain[1].data = { amount: 100};
//blockmec.chain[1].hash = blockmec.chain[1].calculateHash();
console.log('is blockchain valid? : ' + blockmec.isChainValid());
console.log(JSON.stringify(blockmec, null, 7));