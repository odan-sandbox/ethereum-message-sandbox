import '@nuxt/vue-app'

declare module '@nuxt/vue-app' {
  type Inject = (name: string, obj: any) => void
}
