<template>
  <v-card>
    <div v-if="student">
        <v-card-subtitle class="py-1">Student ID:
            <span class="text-body-1 font-weight-bold mx-3">{{student.sid}}</span>
        </v-card-subtitle>
        <v-card-subtitle class="py-1">Student Full Name:
            <span class="text-body-1 font-weight-bold mx-3">{{student.first_name}} {{student.last_name}}</span>
        </v-card-subtitle>
        <v-card-subtitle class="py-1">Student Mebmership Type:
            <span class="text-body-1 font-weight-bold mx-3">{{student.membership_type}}</span>
        </v-card-subtitle>
        <v-card-subtitle class="py-1">Student Degree:
            <span class="text-body-1 font-weight-bold mx-3">{{student.degree}}</span>
        </v-card-subtitle>
        <v-card-subtitle class="py-1">Student Start Date:
            <span class="text-body-1 font-weight-bold mx-3">{{student.start_date}}</span>
        </v-card-subtitle>
    </div>

    <v-simple-table class="my-8">
      <template v-slot:default>
        <thead class="primary">
          <tr>
            <th class="text-left white--text" v-for="header in headers" :key="header.value">
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in courses"
            :key="index"
            class="blue lighten-4"
          >
            <v-btn outlined :disabled="item.is_approved" @click.prevent="approveCourse(item.course_it)" color="green">
                {{ item.is_approved ? 'Approved' : 'Approve'}}
            </v-btn>
            <td>{{ item.course_id }}</td>
            <td>{{ item.course_name }}</td>
            <td>{{ item.credit }}</td>
            <td>{{ item.department }}</td>
            <td>{{ item.class_room }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AdviseeStudentPage',
    mounted() {
        this.initalData()
        console.log('mounted');
    },
    data: () => ({
        currentTerm: null,
        student: null,
        headers: [
            {text: 'Approved', value: 'is_approved'},
            {text: 'ID', value: 'course_id'},
            {text: 'Course Name', value: 'course_name'},
            {text: 'Credit', value: 'credit'},
            {text: 'Department', value: 'department'},
            {text: 'Class Room', value: 'class_room'},
        ],
        courses: []
    }),
    methods: {
        async initalData() {
            await this.getCurrentTerm();
            this.getStudentData();
            this.getStudentCourses();
        },
        async getCurrentTerm() {
            const url = process.env.baseURL + `teacher/${this.getUserCurrenctPosition.id}/terms/`

            const resp = await this.$axios.get(url)
            this.currentTerm = resp.data[0]
        },
        getStudentData() {
            const url = process.env.baseURL + `student/${this.$route.params.student_id}/detail/`

            this.$axios.get(url).then((resp) => {
                this.student = resp.data[0]
            })
        },
        getStudentCourses() {
            const url = process.env.baseURL + `student/${this.$route.params.student_id}/section/${this.currentTerm.id}/`

            this.$axios.get(url).then((resp) => {
                this.courses = resp.data
            })
        },
        approveCourse(course_id) {
            const url = process.env.baseURL + ``

            this.$axios.post(url, ).then((resp) => {
                this.courses = resp.data
                console.log('====->>>> in approveCourse');
                console.log(resp.data);
                console.log('<<<<+==== in approveCourse');
            })
        }
    },
    computed: {
      ...mapGetters('auth', ['getUser', 'getUserCurrenctPosition'])
    }
}
</script>

<style>

</style>