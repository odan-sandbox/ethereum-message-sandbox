import { QurageLinkFactory } from '@uniqys/qurage-link-lib'
import { Context, Inject } from '@nuxt/vue-app'

const INFURA_PROJECT_ID = 'bd35010d62134981a9e82dff4708728b'

export default (_: Context, inject: Inject) => {
  const endpoint = `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`
  const qurageLink = QurageLinkFactory.create({ endpoint })

  inject('qurageLink', qurageLink)
}
