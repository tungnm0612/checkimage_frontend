import Web3 from 'web3';

const enableMetamask = new Web3(window.ethereum.enable());

export default enableMetamask;