<template>
  <v-col>
    <v-row v-for="(course, index) in chart" :key="index">
        <div>Course Suggested Term: {{ course.suggested_term }}</div>
        <div>Course ID: {{ course.course_id }}</div>
        <div>Course Name: {{ course.course_name }}</div>
        <div>Credits: {{ course.credit }}</div>
        <div>Prerequiesite: {{ course.pishniaz_course_term }}</div>
    </v-row>
  </v-col>
</template>

<script>
export default {
    name: 'DepartmentChartPage',
    mounted() {
        this.getChart()
    },
    data: () => ({
        chart: []
    }),
    methods: {
        getChart() {
            const url = process.env.baseURL + `department/${this.$route.params.department}/chart/`

            this.$axios.get(url).then((resp) => {
                this.chart = resp.data
            })
        }
    }
}
</script>

<style>

</style>