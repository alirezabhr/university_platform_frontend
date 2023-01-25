<template>
  <v-col>
    <div class="text-h5 mt-3">Student Report</div>
    <div v-for="(report, index) in reports" :key="index" class="mx-8 my-12">
        <div class="text-body-1 font-weight-bold">Term: {{ report.term_title }}</div>
        <div class="my-2">
            <v-data-table
                :headers="headers"
                :items="report.courses"
                class="elevation-1"
                :disable-items-per-page="true"
                :disable-pagination="true"
                hide-default-footer
            ></v-data-table>
            <v-card class="my-2">
                <v-row justify="space-around">
                    <v-card-subtitle>Department Average: {{ report.department_avg }}</v-card-subtitle>
                    <v-card-subtitle>Your Average: {{ report.student_avg }}</v-card-subtitle>
                </v-row>
            </v-card>
        </div>
    </div>
  </v-col>
</template>

<script>
export default {
    name: 'CoursesReportPage',
    mounted() {
        this.getStudentReport()
    },
    data() {
        return {
            headers: [
                {text: 'Course ID', value: 'course_id'},
                {text: 'Course Name', value: 'course_name'},
                {text: 'Credit', value: 'credit'},
                {text: 'Average', value: 'avg'},
                {text: 'Max', value: 'max'},
                {text: 'Min', value: 'min'},
                {text: 'Mark', value: 'mark'},
            ],
            reports: [
                {
                    term_id: 1,
                    term_title: 'term1',
                    student_avg: 14,
                    department_avg: 17,
                    courses: [
                        {
                            course_id: 1,
                            course_name: 'course 1',
                            credit: 3,
                            avg: 16,
                            min: 7,
                            max: 19,
                            mark: 17
                        },
                        {
                            course_id: 2,
                            course_name: 'course 2',
                            credit: 2,
                            avg: 17.5,
                            min: 9,
                            max: 20,
                            mark: 20
                        }
                    ]
                },
                {
                    term_id: 2,
                    term_title: 'term2',
                    student_avg: 15,
                    department_avg: 17,
                    courses: [
                        {
                            course_id: 1,
                            course_name: 'course 1',
                            credit: 3,
                            avg: 16,
                            min: 7,
                            max: 19,
                            mark: 17
                        },
                        {
                            course_id: 2,
                            course_name: 'course 2',
                            credit: 2,
                            avg: 17.5,
                            min: 9,
                            max: 20,
                            mark: 20
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        getStudentReport() {
            const url = process.env.baseURL + `student/${this.$route.params.student_id}/report/`

            this.$axios.get(url).then((resp) => {
                this.reports = resp.data
            })
        }
    }
}
</script>

<style>

</style>