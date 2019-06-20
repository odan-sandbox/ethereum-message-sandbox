import Web3 from 'web3'
import { Context, Inject } from '@nuxt/vue-app'

const messageJson = require('../../ethereum/build/contracts/Message.json')

export default (_: Context, inject: Inject) => {
  const web3 = new Web3(window.web3.currentProvider)
  inject('web3', web3)

  // seed = 42
  const contractAddress = process.env.MESSAGE_CONTRACT_ADDRESS
  const message = new web3.eth.Contract(messageJson.abi, contractAddress)
  inject('contracts', { message })
}
