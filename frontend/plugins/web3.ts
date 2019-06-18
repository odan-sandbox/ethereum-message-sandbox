import Web3 from 'web3'

const messageJson = require('../../ethereum/build/contracts/Message.json')

export default (_, inject) => {
  const web3 = new Web3(window.web3.currentProvider)
  inject('web3', web3)

  const contractAddress = '0x1183b8448a2c23a721becf178b082ce2b2c899af'
  const message = new web3.eth.Contract(messageJson.abi, contractAddress)
  inject('message', message)
}
