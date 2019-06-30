import { Provider } from 'web3/providers'

export {}
declare global {
  interface Window {
    web3: {
      currentProvider: Provider
    }
    ethereum: {
      enable(): Promise<string[]>
      // XXX
      currentProvider: Provider
    }
  }
}
