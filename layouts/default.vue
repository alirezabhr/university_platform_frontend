<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            {{ userPositionTitle }}
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>

        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in getUserPositions"
            :key="index"
          >
            <v-list-item-title>
              <v-btn @click.prevent="changeUserPosition(getUserPositions[index])" text>{{ item.title }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer/>
      <v-btn
        icon
        @click.prevent="$router.push('/')"
        class="px-5"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        outlined
        @click.prevent="logout"
      >
        <v-icon>mdi-exit-to-app</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <v-main class="blue lighten-5">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',
  middleware: 'auth',
  data () {
    return {
      
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapMutations('auth', ['setUserPosition']),

    changeUserPosition(position) {
      this.setUserPosition(position)
    }
  },
  computed: {
    ...mapGetters('auth', ['getUserCurrenctPosition', 'getUserPositions']),

    userPositionTitle () {
      if (this.getUserCurrenctPosition) {
        return this.getUserCurrenctPosition.title
      }
      return ''
    }
  }
}
</script>
