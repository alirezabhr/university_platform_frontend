<template>
  <v-container>
    <v-snackbar
      v-model="showSnackbar"
      color="grey darken-3"
    >
      {{ snackbarMessage }}
    </v-snackbar>
    <v-row justify="center">
      <v-col cols="7" align-self="center">
        <v-card class="px-12 py-6">
          <v-card-title>
            Login with username and password
          </v-card-title>
          
          <v-form
            ref="form"
            lazy-validation
          >
            <v-text-field
              v-model="username"
              label="username"
              :rules="basicRules"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              counter
              @click:append="showPassword = !showPassword"
              :rules="basicRules"
              required
            ></v-text-field>
          </v-form>

          <v-card-actions>
            <v-btn class="primary" @click.prevent="loginSubmit()">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  layout: 'auth',
  data: () => ({
    username: '',
    password: '',
    showPassword: false,
    showSnackbar: false,
    snackbarMessage: '',
    basicRules: [
      v => !!v || 'Field is required'
    ]
  }),
  methods: {
    ...mapActions('auth', ['login']),

    loginSubmit () {
      if (this.$refs.form.validate()) {
        this.login({username: this.username, password: this.password}).then(() => {
          this.$router.push('/')
        }).catch((msg) => {
          this.snackbarMessage = msg
          this.showSnackbar = true
        })
      }
    }
  }
}
</script>
