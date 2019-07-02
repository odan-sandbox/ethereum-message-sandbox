import Vue from 'vue'
import {
  Getters,
  Mutations,
  Actions,
  Module,
  createStore
} from 'vuex-smart-module'
import { JsonRPCResponse } from 'web3/providers'

const vue = new Vue()

type Network =
  | 'Ethereum Mainnet'
  | 'Morden Testnet'
  | 'Ropsten Testnet'
  | 'Rinkeby Testnet'
  | 'Kovan Testnet'
  | 'Truffle Localnet'

type NetworkId = '1' | '2' | '3' | '4' | '42' | '99'

class Web3State {
  networkId: NetworkId = '1'
}

class Web3Getters extends Getters<Web3State> {
  network(): Network {
    const id = this.state.networkId
    switch (id) {
      case '1':
        return 'Ethereum Mainnet'
      case '2':
        return 'Morden Testnet'
      case '3':
        return 'Ropsten Testnet'
      case '4':
        return 'Rinkeby Testnet'
      case '42':
        return 'Kovan Testnet'
      case '99':
        return 'Truffle Localnet'
    }
  }
}

class Web3Mutations extends Mutations<Web3State> {
  changeNetwork(id: NetworkId) {
    this.state.networkId = id
  }
}

function send<T = any>(method: string, params: any[]): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    vue.$web3.currentProvider.send(
      { jsonrpc: '2.0', id: 1, method, params },
      (error: null | Error, val?: JsonRPCResponse) => {
        if (error) {
          reject(error)
          return
        }
        if (!val) {
          reject(new Error('json-rpc response is undefined'))
          return
        }
        if (val.error) {
          reject(new Error(val.error))
          return
        }

        resolve(val.result)
      }
    )
  })
}

function validNetworkId(id: string): id is NetworkId {
  switch (id) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '42':
    case '99':
      return true
    default:
      return false
  }
}

class Web3Actions extends Actions<
  Web3State,
  Web3Getters,
  Web3Mutations,
  Web3Actions
> {
  async updateNetwork() {
    const id = await send<string>('net_version', [])
    if (validNetworkId(id)) {
      this.commit('changeNetwork', id)
    } else {
      throw new Error(`Unknown network id: ${id}`)
    }
  }
}

const web3 = new Module({
  state: Web3State,
  getters: Web3Getters,
  mutations: Web3Mutations,
  actions: Web3Actions
})

const store = createStore(web3, {
  strict: process.env.NODE_ENV !== 'production'
})

const { state, getters } = store
export { state, getters }
