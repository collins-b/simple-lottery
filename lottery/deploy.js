const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'combine banana nest process decorate pumpkin aspect ribbon earth front hole call',
    'https://rinkeby.infura.io/v3/f639fa90fb334155af43768e5148f88e'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode })
      .send({ from: accounts[0], gas: '1000000' });
    
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();
