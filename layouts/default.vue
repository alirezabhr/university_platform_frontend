<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>{{ userPositionTitle }}</v-toolbar-title>
      <v-spacer/>
      <v-btn
        outlined
        @click.prevent="logout"
      >
        <v-icon>mdi-exit-to-app</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',
  middleware: 'auth',
  data () {
    return {
      
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
  computed: {
    ...mapGetters('auth', ['getUserCurrenctPosition']),

    userPositionTitle () {
      if (this.getUserCurrenctPosition) {
        return this.getUserCurrenctPosition.title
      }
      return ''
    }
  }
}
</script>
