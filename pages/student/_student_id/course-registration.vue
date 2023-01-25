<template>
    <v-col>
        <v-card class="my-5">
            <v-card-title>Courses You You Can Select</v-card-title>
            <v-row v-for="(course, index) in unSelectedCourses" :key="index">
                    <v-btn icon @click.prevent="addSection(course.course_id)">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-card-subtitle>{{course.course_id}}  --  Course: {{course.course_name}}  --  Credits: {{course.credit}}</v-card-subtitle>
            </v-row>
        </v-card>
        <v-card class="my-5">
            <v-card-title>Selected Courses</v-card-title>
            <v-row v-for="(course, index) in selectedCourses" :key="index">
                    <v-btn icon @click.prevent="removeSection(course.course_id)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-card-subtitle>{{course_id}}  --  Course: {{course_name}}  --  Credits: {{credit}}</v-card-subtitle>
            </v-row>
        </v-card>
    </v-col>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CourseRegistrationPage',
    mounted() {
        this.initialData()
    },
    data: () => ({
        currentTerm: null,
        unSelectedCourses: [],
        selectedCourses: []
    }),
    
    methods: {
        async initialData() {
            await this.getUserTerms()
            this.getUnselectedCourses()
            this.getSelectedCourses()
        },
        async getUserTerms() {
            if (this.getUser) {
                let url = process.env.baseURL + `student/${this.getUserCurrenctPosition.id}/terms/`
                
                const resp = await this.$axios.get(url)
                this.currentTerm = this.userTerms[0]
            }
        },
        getUnselectedCourses() {
            const url = process.env.baseURL + `student/${this.getUserCurrenctPosition.id}/course-registration/${this.currentTerm.id}/${this.getUserCurrenctPosition.department}/`

            this.$axios.get(url).then((resp) => {
                this.unSelectedCourses = resp.data
            })
        },
        getSelectedCourses () {
            const url = process.env.baseURL + `student/${this.getUserCurrenctPosition.id}/section/${this.currentTerm.id}/`

            this.$axios.get(url).then((resp) => {
                this.selectedCourses = resp.data
            })
        },
        addSection(section_id) {

        },
        removeSection(section_id) {
            
        }
    },
    computed: {
        ...mapGetters('auth', ['getUser', 'getUserCurrenctPosition'])
    }
}
</script>

<style>

</style>