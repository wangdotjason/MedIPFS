<div align="center">
</div>

# MedIPFS

File sharing web application that uses IPFS protocol and Ethereum blockchain for decentralized file storage.

## How it works

#### Architecture
This is a dApp or decentralized application with a simple frontend connected with a set of backend services composed by a Smart Contract deployed to Ganache Ethereum testnet and a storage service using IPFS.

The **Smart Contract** role is to store basic information about the users and files stored in the app. 

![Alt text](./public/images/docs/diagram.svg)

#### Stack

- [Solidity](https://docs.soliditylang.org/en/v0.8.13/) for Smart Contract development on **Ethereum**.
- [Truffle Suite](https://trufflesuite.com/) for local infrastructure and SC deployment.
- [Ganache](https://trufflesuite.com/ganache/index.html) as a local development blockchain.
- [Metamask](https://metamask.io/) for in-browser user authentication.
- [React.js](https://reactjs.org/) (Next.js Framework).
- [Tailwind CSS](https://tailwindcss.com/) for styling components.
- [Ant UI](https://ant.design/) framework for prebuilt UI components.

#### Basic Process

1. The users connect their account to **Metamask** after pressing _Connect_ button (the app attempts to do this automatically if there is an existing account logged in in Metamask).
2. Once there is a connected account in the app, the app enables the button for start uploading files on the **Upload** section.
3. Once you uploaded your first file, you will be able to see the result in the **Files** section (Below the upload section). 

## Running locally

#### Configuring the app

First, configure `.env` file for blockchain configuration

```bash
INFURA_PROJECT_ID = <Your Infura Project ID>
PRIVATE_KEY = <Your Infura private key>
ACCOUNT_ADDRESS = <Your Account Address>
```

#### Smart contract migration and deployment

First, initialize truffle project on the repo.

```bash
truffle init
```

Then migrate smart contracts to ganache.

```bash
truffle migrate --network development
```

#### Running frontend application

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
