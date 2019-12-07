import web3 from './web3';

const address = '0x036e58404E30795b3E5C945bc2A4107737F119cA';

const abi = [{"constant":false,"inputs":[{"name":"_idUser","type":"string"},{"name":"_hashImage","type":"string"}],"name":"addImage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Images","outputs":[{"name":"_idUser","type":"string"},{"name":"_hashImage","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ImagesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getImage","outputs":[{"components":[{"name":"_idUser","type":"string"},{"name":"_hashImage","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"}];

export default new web3.eth.Contract(abi, address);