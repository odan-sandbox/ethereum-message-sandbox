import Web3 from 'web3'
import { Context, Inject } from '@nuxt/vue-app'

const messageJson = require('../../ethereum/build/contracts/Message.json')

export default (_: Context, inject: Inject) => {
  const web3 = new Web3(window.web3.currentProvider)
  inject('web3', web3)

  // seed = 42
  const contractAddress = '0x9e64cacf399d28a6f8ef2bed53dd012e01e6d903'
  const message = new web3.eth.Contract(messageJson.abi, contractAddress)
  inject('contracts', { message })
}
