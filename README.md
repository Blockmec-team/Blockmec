<p align="center">
  <a href="" rel="noopener">
  <img width=200px height=200px src="https://i.imgur.com/n4YDngz.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Blockmec</h3>



---


## Features

* Simple proof-of-work algorithm
* Verify blockchain (to prevent tampering)
* Generate wallet (private/public key)
* Sign transactions

## 🏁 Getting Started <a name = "getting_started"></a>

### Install library
```
npm install --save blockmec
```

## API Reference

### Nodes

#### POST /transact
Send transactions

##### Body `json`
```json
{
    "to":"Address",
    "amount":Number,
    "type": "TRANSACTION" | "STAKE" | "VALIDATOR_FEE"
}
```

#### GET /transactions
Returns the content of the transaction pool

#### GET /public-key
Returns the public-key of the node

#### GET /balance
Returns the balance of the node


## Start system

1. Run a few nodes with different HTTP and Socket Ports
    
    1st Node
    ```
    HTTP_PORT=3001 P2P_PORT=5001 npm run dev
    ```
    2nd Node - add the 1st node as peer
    ```
    HTTP_PORT=3002 P2P_PORT=5002 PEERS=wc://localhost:5001 npm run dev
    ```

    3rd Node - add the 1st and 2nd node as peer
    ```
    HTTP_PORT=3003 P2P_PORT=5003 PEERS=wc://localhost:5001,wc://localhost:5002 npm run dev

