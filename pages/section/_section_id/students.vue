<template>
  <v-container>
    <v-data-table
        :headers="headers"
        :items="students"
        :items-per-page="20"
        class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
    name: 'SectionStudentsPage',
    mounted() {
        this.getStudents()
    },
    data: () => ({
        headers: [
            { text: 'No.', value: 'number' },
            { text: 'Student ID', value: 'sid' },
            { text: 'Student First Name', value: 'first_name' },
            { text: 'Student Last Name', value: 'last_name' },
        ],
        students: []
    }),
    methods: {
        getStudents() {
            const url = process.env.baseURL + `section/${this.$route.params.section_id}/students/`
            this.$axios.get(url).then((resp)=> {
                this.students = resp.data
                this.students.map((el) => el.number = this.students.indexOf(el)+1)
            })
        }
    }
}
</script>
