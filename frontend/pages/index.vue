<template>
  <v-layout row justify-center align-center wrap>
    <v-flex xs10>
      <v-text-field
        v-model="inputMessage"
        label="Regular"
        placeholder="Placeholder"
      ></v-text-field>
    </v-flex>
    <v-flex xs2>
      <v-btn @click="click">Submit</v-btn>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          Message
        </v-card-title>
        <v-card-text>
          {{ message }}
          {{ address }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  data: () => {
    return {
      inputMessage: '',
      message: '',
      address: '',
      receipt: {}
    }
  },
  mounted(): void {
    window.ethereum.enable().then(async accounts => {
      this.address = accounts[0]
      await this.updateMessage()
    })
  },
  methods: {
    getValue(): Promise<string> {
      return this.$contracts.message.methods.getValue().call()
    },
    async setValue(value: string): Promise<void> {
      // eslint-disable-next-line no-console
      console.log(value, this.address)
      this.receipt = await this.$contracts.message.methods
        .setValue(value)
        .send({ from: this.address })
      // eslint-disable-next-line no-console
      console.log(this.receipt)
    },
    async updateMessage() {
      this.message = await this.getValue()
      // eslint-disable-next-line no-console
      console.log('updated', this.message)
    },
    async click() {
      await this.setValue(this.inputMessage)
      await this.updateMessage()
    }
  }
})
</script>
