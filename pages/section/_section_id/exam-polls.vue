<template>
  <v-container>
    <div v-if="polls.length === 0">
      There is no exam poll
    </div>
    <v-row v-else>
      <v-col cols="4" v-for="poll in polls" :key="`poll-${poll.id}`">
        <v-card>
          <v-card-title>Exam: {{ poll.title }}</v-card-title>
          <v-card-subtitle>Exam Type: {{ poll.type }}</v-card-subtitle>
          <div v-for="option in poll.options" :key="`opt-${option.id}`">
            <v-checkbox
              v-model="option.isAnswered"
              class="px-2"
              :label="`date: ${option.exam_date} time: ${option.start_at} - ${option.end_at}`"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExamType from '~/models/enums/exam_types'

export default {
    name: 'ExamPollPage',
    mounted() {
      this.getExamPolls()
    },
    data() {
      return {
        polls: [
          {
            id: 1,
            start_at: '2021/12/2 12:30',
            end_at: '2021/12/2 16:00',
            title: 'exam title 1',
            type: ExamType.final,
            options: [
              {
                id: 1,
                exam_poll_id: 1,
                exam_date: '2022/05/14',
                start_at: '12:00',
                end_at: '14:30',
              },
              {
                id: 2,
                exam_poll_id: 1,
                exam_date: '2022/05/15',
                start_at: '08:00',
                end_at: '11:00',
              },
            ]
          },
          {
            id: 2,
            start_at: '2021/12/2 12:30',
            end_at: '2021/12/2 16:00',
            title: 'exam title 2',
            type: ExamType.quiz,
            options: [
              
              ]
          },
          {
            id: 3,
            start_at: '2021/10/7 12:30',
            end_at: '2021/10/7 16:00',
            title: 'exam title 3',
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
    methods: {
      getExamPolls() {
        this.$axios.get(url).then((resp) => {
          this.polls = resp.data
        })
      }
    }
}
</script>

<style>

</style>