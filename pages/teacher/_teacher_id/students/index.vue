<template>
    <v-col>
        <v-card class="my-5">
            <v-card-title>Advisee Students</v-card-title>
            <v-row v-for="(std, index) in students" :key="index"  @click.prevent="$router.push(`${std.sid}/`)">
                <v-col id="student_row">
                    <v-divider class="mx-4"/>
                    <v-card-subtitle>{{std.sid}} | {{std.first_name}} {{std.last_name}} | {{std.degree}} |  {{std.membership_type}}</v-card-subtitle>
                    <v-divider class="mx-4"/>
                </v-col>
            </v-row>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: 'TeacherStudentsPage',
    mounted() {
        this.getStudents()
    },
    data: () => ({
        students: []
    }),
    methods: {
        getStudents() {
            const url = process.env.baseURL + `teacher/${this.$route.params.teacher_id}/get-students/`

            this.$axios.get(url).then((resp) => {
                this.students = resp.data
                console.log(resp.data);
            })
        }
    }
}
</script>

<style>
#student_row:hover {
    cursor: pointer;
}
</style>