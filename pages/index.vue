<template>
  <v-row justify="center" align="center">
    <v-col cols="10">
      <v-menu offset-y v-if="currentTerm">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            outlined
            v-bind="attrs"
            v-on="on"
          >
            {{ currentTerm.title }}
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>

        </template>
        <v-list>
          <v-list-item
            v-for="(term, index) in userTerms"
            :key="index"
          >
            <v-list-item-title>
              <v-btn @click.prevent="changeCurrentTerm(term.id)" text>{{ term.title }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <SectionsTable class="py-5" :sections="sections" />
      <ExamDatesTable class="pa-5" :examDates="examDates" />
    </v-col>
  </v-row>
</template>

<script>
import UserPositionType from '~/models/enums/user_position_types'
import SectionsTable from '~/components/sections_table.vue'
import ExamDatesTable from '~/components/exam_dates_table.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    SectionsTable,
    ExamDatesTable
  },
  data: () => ({
    currentTerm: null,
    userTerms: [],
    sections: [],
    examDates: []
  }),
  mounted() {
    this.initialHomePageData()
  },
  methods: {
    async initialHomePageData() {
      await this.getUserTerms()
      this.getSections()
      this.getExamDates()
    },
    async getUserTerms() {
      if (this.getUser) {
        let url = ''
        
        if (this.getUserCurrenctPosition.positionType == UserPositionType.STUDENT) {
          url  = process.env.baseURL + `user/student/${this.getUserCurrenctPosition.id}/terms/`
        } else {
          url = process.env.baseURL + `user//${this.getUserCurrenctPosition.id}/terms/`
        }
        const resp = await this.$axios.get(url)
        this.userTerms = resp.data
        this.currentTerm = this.userTerms[0]
      }
    },
    getSections() {
      if (this.getUser) {
        let url = ''
        
        if (this.getUserCurrenctPosition.positionType == UserPositionType.STUDENT) {
          url  = process.env.baseURL + `user/student/${this.getUserCurrenctPosition.id}/section/${this.currentTerm.id}/`
        } else {
          url = process.env.baseURL + ''
        }
        
        this.$axios.get(url).then((resp) => {
          this.sections = resp.data
        })
      }
    },
    getExamDates() {
      if (this.getUser) {
        let url = ''

        if (this.getUserCurrenctPosition.positionType == UserPositionType.STUDENT) {
          url = process.env.baseURL + `user/student/${this.getUserCurrenctPosition.id}/deadline/${this.currentTerm.id}/`
        } else {
          url = process.env.baseURL + ''
        }

        this.$axios.get(url).then((resp) => {
          console.log('exam datas: ');
          console.log(resp.data);
          this.examDates = resp.data
        })
      }
    },
    changeCurrentTerm(termId) {
      this.currentTerm = this.userTerms.find(t => t.id == termId)
      this.getSections()
      this.getExamDates()
    }
  },
  computed: {
    ...mapGetters('auth', ['getUser', 'getUserCurrenctPosition'])
  }
}
</script>
