export {}
declare global {
  interface Window {
    web3: {
      currentProvider: any
    }
    ethereum: {
      enable(): Promise<string[]>
    }
  }
}
