<template>
  <v-col>
    <v-row v-for="(course, index) in chart" :key="index">
        <v-card class="ma-4 pa-4" width="100%">
            <v-card-subtitle class="py-2 font-weight-bold">Course Suggested Term: {{ course.suggested_term }}</v-card-subtitle>
            <v-card-subtitle class="py-2 font-weight-bold">Course ID: {{ course.course_id }}</v-card-subtitle>
            <v-card-subtitle class="py-2 font-weight-bold">Course Name: {{ course.course_name }}</v-card-subtitle>
            <v-card-subtitle class="py-2 font-weight-bold">Credits: {{ course.credit }}</v-card-subtitle>
            <v-card-subtitle class="py-2 font-weight-bold">Prerequiesites:
                <span v-for="(pishniaz, index) in course.pishniaz_course_term" :key="index">
                    {{ pishniaz }}
                </span>
            </v-card-subtitle>
        </v-card>
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