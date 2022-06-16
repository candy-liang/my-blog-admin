import { defineStore } from 'pinia'

export default defineStore({
  id: 'app',

  state () {
    return {
      name: 'pinia_test'
    }
  }
})