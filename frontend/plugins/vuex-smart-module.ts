import { Context } from '@nuxt/vue-app'
import { registerModule } from 'vuex-smart-module'
import { web3 } from '@/store/web3'

export default ({ store }: Context) => {
  registerModule(store, 'poyo', 'poyo', web3.clone())
}
