import { GetterTree, MutationTree, ActionTree } from 'vuex'
import axios from 'axios'
import { RootState } from '../index'

import localStorageKeys from '~/models/enums/local_storage'
import User from '~/models/user'
import UserPosition from '~/models/user_position'
import UserPositionTypes from '~/models/enums/user_position_types'

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

    // initial user
    const userStr = localStorage.getItem(localStorageKeys.USER)
    if (userStr) {
      state.user = JSON.parse(userStr)
    }

    // initial user current position
    const userPositionStr = localStorage.getItem(localStorageKeys.USER_POSITION)
    if (userPositionStr) {
      state.userPosition = JSON.parse(userPositionStr)
    }
  },
  setUser(state , user: User) {
    const updatedUser = {
      ...user,
      student_infos: user.student_infos.map((el:any) => ({...el, id: el.sid, positionType: UserPositionTypes.STUDENT, title: `Student ${el.degree} ${el.start_date}`, department: el.department})),
      teacher_infos: user.teacher_infos.map((el) => ({...el, id:el.id, positionType: UserPositionTypes.TEACHER, title: `Teacher ${el.position} ${el.start_date}`, department: el.department})),
      employee_infos: user.employee_infos.map((el) => ({...el,id:el.id, positionType: UserPositionTypes.EMPLOYEE, title: `Employee ${el.position} ${el.start_date}`, department: el.department})),
    }
    state.user = updatedUser
    if(updatedUser.student_infos.length) {
      state.userPosition = updatedUser.student_infos[0]
    }
    if(updatedUser.teacher_infos.length) {
      state.userPosition = updatedUser.teacher_infos[0]
    }
    if(updatedUser.employee_infos.length) {
      state.userPosition = updatedUser.employee_infos[0]
    }

    localStorage.setItem(localStorageKeys.USER, JSON.stringify(state.user))
    localStorage.setItem(localStorageKeys.USER_POSITION, JSON.stringify(state.userPosition))
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
      payload,
    ).then((response) => {
      vuexContext.commit('setUser', response.data)
    }).catch((e) => {
      console.error(e)
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
  getUserPositions: (state) : UserPosition[] => {
    const arr :UserPosition[] = []
    if (state.user) {
      state.user.student_infos.forEach(std => {
        arr.push(std)
      });
      state.user.teacher_infos.forEach(t => {
        arr.push(t)
      });
      state.user.employee_infos.forEach(emp => {
        arr.push(emp)
      });
    }
    return arr
  },
  isStudentUser: (state) => {
    return state.userPosition!.positionType == UserPositionTypes.STUDENT
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
