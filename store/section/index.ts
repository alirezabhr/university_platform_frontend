import { GetterTree, MutationTree, ActionTree } from 'vuex'
import axios from 'axios'
import { RootState } from '../index'

const namespace = 'section'

interface SectionState {
}

const state = () : SectionState => ({
})

const mutations = <MutationTree<SectionState>>{
}

const actions = <ActionTree<SectionState, RootState>>{
}

const getters = <GetterTree<SectionState, RootState>>{
}

export default {
  namespace,
  state,
  mutations,
  getters,
  actions
}
