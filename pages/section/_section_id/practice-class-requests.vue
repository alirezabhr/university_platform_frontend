<template>
  <v-container>
    <v-snackbar
      v-model="showSnackbar"
      color="green darken-3"
    >
      {{ snackbarMessage }}
    </v-snackbar>
    <v-dialog
      v-model="dialog"
      v-if="isStudentUser"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green darken-2"
          dark
          v-bind="attrs"
          v-on="on"
          class="my-5"
        >
          <v-icon>mdi-plus-circle-outline</v-icon>
          <div class="font-weight-bold text-body-1 px-3">New Request</div>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5">
          Request Creation
        </v-card-title>

        <v-card-text>
          Do you want to create new request for practice class?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="createPracticeRequest()"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-if="requests.length === 0">
      There is no request for practice class
    </div>
    <v-row v-else>
      <v-col cols="4" v-for="request in requests" :key="request.id">
        <v-card>
          <v-card-title>Request ID: {{ request.id }}</v-card-title>
          <v-card-text>Status: <div class="font-weight-bold text-body-1">{{ request.status }}</div></v-card-text>
          <v-card-subtitle v-if="!isStudentUser">
            <v-btn :disabled="request.status != 'Pending'" color="green" @click.prevent="setRequestStatus(request.id, 'Approved')">Accept</v-btn>
            <v-btn :disabled="request.status != 'Pending'" color="red" @click.prevent="setRequestStatus(request.id, 'Canceled')">Reject</v-btn>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserPositionType from '~/models/enums/user_position_types'
import { mapGetters } from 'vuex'

export default {
    name: 'PracticeClassRequestPage',
    mounted() {
      this.getPracticeClassRequests()
    },
    data() {
      return {
        showSnackbar: false,
        snackbarMessage: '',
        dialog: false,
        requests: []
      }
    },
    methods: {
      getPracticeClassRequests() {
        if (this.getUser) {
          let url = ''
          if (this.getUserCurrenctPosition.positionType == UserPositionType.STUDENT) {
            url = process.env.baseURL + `student/${this.getUserCurrenctPosition.id}/practice-class-request/${this.$route.params.section_id}/`
          } else {
            url = process.env.baseURL + `section/${this.$route.params.section_id}/practice-class-request/all/`
          }

          this.$axios.get(url).then((resp)=> {
              this.requests = resp.data
          })
        }
      },
      createPracticeRequest() {
        const url = process.env.baseURL + `student/${this.getUserCurrenctPosition.id}/practice-class-request/create/${this.$route.params.section_id}/`

        this.$axios.post(url).then((resp)=> {
          this.snackbarMessage = 'Request Created Successfully'
          this.showSnackbar = true
          this.getPracticeClassRequests()
        })
        
        this.dialog = false
      },
      setRequestStatus(requestId, status) {
        const url = process.env.baseURL + `section/${this.$route.params.section_id}/practice-class-request/${requestId}/set-status/`

        const payload = {
          status: status
        }

        this.$axios.post(url, payload).then((resp)=> {
          this.snackbarMessage = 'Request Status Changed Successfully'
          this.showSnackbar = true
          this.getPracticeClassRequests()
        })
      }
    },
    computed: {
      ...mapGetters('auth', ['getUser', 'getUserCurrenctPosition', 'isStudentUser'])
    }
}
</script>

<style>

</style>