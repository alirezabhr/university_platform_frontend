<template>
  <v-col>
    <v-row v-if="isStudentUser" class="grey my-5 pa-2">
      <v-btn @click.prevent="$router.push(`student/${getUserCurrenctPosition.id}/courses-report/`)" class="ma-1">All Course Report</v-btn>
      <v-btn @click.prevent="$router.push(`student/${getUserCurrenctPosition.id}/course-registration/`)" class="ma-1">Course Registration</v-btn>
      <v-btn @click.prevent="$router.push(`department/${getUserCurrenctPosition.department}/chart/`)" class="ma-1">Department Suggested Chart</v-btn>
      <v-btn @click.prevent="$router.push(`department/${getUserCurrenctPosition.department}/chart/`)" class="ma-1">TA Resume</v-btn>
    </v-row>
    <v-row v-if="isTeacherUser" class="grey my-5 pa-2">
      <v-btn @click.prevent="$router.push(`teacher/${getUserCurrenctPosition.id}/students/`)" class="ma-1">Advisee Students</v-btn>
    </v-row>
    <v-row>
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
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <SectionsTable class="py-5" :sections="sections" />
        <ExamDatesTable class="pa-5" :examDates="examDates" />
      </v-col>
    </v-row>
  </v-col>
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
      console.log("in getUserTerms");
      if (this.getUser) {
        let url = ''
        
        if (this.getUserCurrenctPosition.positionType == UserPositionType.STUDENT) {
          url  = process.env.baseURL + `student/${this.getUserCurrenctPosition.id}/terms/`
        } else {
          url = process.env.baseURL + `teacher/${this.getUserCurrenctPosition.id}/terms/`
        }
        const resp = await this.$axios.get(url)
        this.userTerms = resp.data
        this.currentTerm = this.userTerms[0]
        console.log('>>>>> getUserTerms results');
        console.log(this.userTerms);
        console.log('<<<<< getUserTerms results');
      }
    },
    getSections() {
      console.log("in getSections");
      if (this.getUser) {
        let url = ''
        
        if (this.getUserCurrenctPosition.positionType == UserPositionType.STUDENT) {
          url  = process.env.baseURL + `student/${this.getUserCurrenctPosition.id}/section/${this.currentTerm.id}/`
        } else {
          url = process.env.baseURL + `teacher/${this.getUserCurrenctPosition.id}/section/${this.currentTerm.id}/`
        }
        
        this.$axios.get(url).then((resp) => {
          this.sections = resp.data
          
          console.log('>>>>> getSections results');
          console.log(this.sections);
          console.log('<<<<< getSections results');
        })

      }
    },
    getExamDates() {
      console.log("in getExamDates");
      if (this.getUser) {
        let url = ''

        if (this.getUserCurrenctPosition.positionType == UserPositionType.STUDENT) {
          url = process.env.baseURL + `student/${this.getUserCurrenctPosition.id}/deadline/${this.currentTerm.id}/`
        } else {
          url = process.env.baseURL + `teacher/${this.getUserCurrenctPosition.id}/deadline/${this.currentTerm.id}/`
        }

        this.$axios.get(url).then((resp) => {
          this.examDates = resp.data

          console.log('>>>>> getExamDates results');
          console.log(this.examDates);
          console.log('<<<<< getExamDates results');
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
    ...mapGetters('auth', ['getUser', 'getUserCurrenctPosition', 'isStudentUser', 'isTeacherUser'])
  },
  watch: {
    getUserCurrenctPosition (newPosition) {
      console.log(`in watch: ${newPosition.title}`);
      this.initialHomePageData()
    }
  }
}
</script>
