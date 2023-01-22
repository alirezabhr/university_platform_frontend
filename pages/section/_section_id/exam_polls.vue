<template>
  <v-container>
    <div v-if="polls.length === 0">
      There is no exam poll
    </div>
    <div v-else>
      <v-col cols="4" v-for="poll in polls" :key="poll.id">
        <v-card>
          <v-card-title>Exam: {{ poll.type }}</v-card-title>
          <div v-for="option in options" :key="option.id">
            <v-checkbox
              v-model="option.isAnswered"
              :label="`date: ${option.date}, start at: ${option.start_at}, finish at: ${option.end_at}`"
            />
          </div>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import ExamType from '~/models/enums/exam_types'
import { mapGetters } from 'vuex'

export default {
    name: 'ExamPollPage',
    data() {
      return {
        // polls: [],
        polls: [
          {
            id: 1,
            start_at: '2021/12/2 12:30',
            end_at: '2021/12/2 16:00',
            type: ExamType.final,
            options: [

            ]
          },
          {
            id: 1,
            start_at: '2021/12/2 12:30',
            end_at: '2021/12/2 16:00',
            type: ExamType.quiz,
            options: [
              
            ]
          },
          {
            id: 1,
            start_at: '2021/10/7 12:30',
            end_at: '2021/10/7 16:00',
            type: ExamType.midterm,
            options: [
              {
                id: 1,

              }
            ]
          },
        ]
      }
    },
    computed: {
        ...mapGetters('', ['']),
    }
}
</script>

<style>

</style>