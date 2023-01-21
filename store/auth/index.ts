import { GetterTree, MutationTree, ActionTree } from 'vuex'
import axios from 'axios'
import { RootState } from '../index'

import localStorageKeys from '~/models/enums/local_storage'
import User from '~/models/user'
import UserPosition from '~/models/user_position'

const namespace = 'auth'

interface AuthState {
  user: User | null
  userPosition: UserPosition | null
}

const state = () : AuthState => ({
  user: null,
  userPosition: null
})

const mutations = <MutationTree<AuthState>>{
  initialAuthStore (state) {
    if (!process.client) { // localStorage is only available on client side
      return
    }

    // initial username
    const userIdStr = localStorage.getItem(localStorageKeys.User)
    if (userIdStr) {
      state.user = JSON.parse(userIdStr)
    }
  },
  setUser(state , user: User) {
    state.user = user
  },
  setUserPosition(state, position: UserPosition) {
    state.userPosition = position
  },
  removeUserData(state) {
    state.user = null
    state.userPosition = null

    // TODO check if it clears every key value pairs
    localStorage.clear()
  }
}

const actions = <ActionTree<AuthState, RootState>>{
  login (vuexContext, payload) {
    const url = process.env.baseURL + 'user/login/'

    return axios.post(
      url,
      payload
    ).then((response) => {
      vuexContext.commit('setUser', response.data)
      localStorage.setItem(localStorageKeys.User, JSON.stringify(response.data))
    }).catch((e) => {
      throw e.response.data
    })
  },
  logout (vuexContext) {
    vuexContext.commit('removeUserData')
    this.$router.push('/login')
  }
}

const getters = <GetterTree<AuthState, RootState>>{
  getUser: (state) : User | null => {
    return state.user
  },
  getUserCurrenctPosition: (state) : UserPosition | null => {
    return state.userPosition
  },
  isAuthenticated: (state) => {
    return !!state.user
  }
}

export default {
  namespace,
  state,
  mutations,
  getters,
  actions
}
