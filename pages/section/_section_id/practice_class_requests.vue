<template>
  <v-container>
    <div v-if="requests.length === 0">
      There is no exam poll
    </div>
    <div v-else>
      <v-col cols="4" v-for="request in requests" :key="request.id">
        <v-card>
          <v-card-title>Request ID: {{ request.id }}</v-card-title>
          <v-card-text>Status: {{ request.status }}</v-card-text>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'PracticeClassRequestPage',
    data() {
      return {
        // requests: [],
        requests: []
      }
    },
    computed: {
        ...mapGetters('', ['']),
    }
}
</script>

<style>

</style>