<template>
  <v-container>
    <div class="text-h6 py-4">Exam Date Times</div>
    <v-data-table
      :headers="headers"
      :items="examDates"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "ExamDatesTable",
  props: {
    examDates: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    headers: [
      { text: "ID", value: "course_id" },
      { text: "Course Name", value: "course_name" },
      { text: "Date", value: "exam_date" },
      { text: "Start Time", value: "start_at" },
      { text: "Finish Time", value: "end_at" },
    ],
  }),
};
</script>

<style>
</style>