import Vue from 'vue'
import Web3 from 'web3'
import Contract from 'web3/eth/contract'

declare module 'vue/types/vue' {
  interface Vue {
    $contracts: {
      message: Contract
    }
    $web3: Web3
  }
}

declare module '*.vue' {
  export default Vue
}
