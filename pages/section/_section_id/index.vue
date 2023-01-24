<template>
    <v-row class="py-5">
        <v-col cols="3" class="d-flex" flex-direction="column">
            <v-card class="px-2 py-5">
                <v-row align="center">
                    <v-card-actions>
                        <v-btn outlined @click.prevent="$router.push(`students/`)">
                            Students List
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn outlined @click.prevent="$router.push(`exam-polls/`)">
                            Exam DateTime Polls
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn outlined @click.prevent="$router.push(`practice-class-requests/`)">
                            Practice Class Request
                        </v-btn>
                    </v-card-actions>
                </v-row>
            </v-card>
        </v-col>
        <v-col cols="8" offset="1">
            <div class="text-h5">
                Section Details
            </div>
            <v-card>
                <v-card-title>Course: {{ section.course.name }}</v-card-title>
                <v-card-text>Class Room: <div class="text-h6">{{ section.class_room }}</div></v-card-text>
                <v-card-text class="pt-4">Teachers: </v-card-text>
                <div v-for="teacher in section.teachers" :key="`t_${teacher.id}`">
                    <div class="px-8">{{ teacher.first_name }} {{ teacher.last_name }}</div>
                </div>
                <v-card-text class="pt-10">Dates and Times:</v-card-text>
                    <div v-for="sectionTime in section.times" :key="`sec_${sectionTime.id}`">
                        <v-row class="px-8 py-2">
                            <div class="px-2">{{ getWeekDayName(sectionTime.week_day) }}</div>
                            <div class="px-2">{{ sectionTime.start_time }} - {{ sectionTime.end_time }}</div>
                        </v-row>
                        <br/>
                    </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import WEEK_DAYS from '~/models/enums/weekdays'

export default {
    name: 'SectionPage',
    data: () => ({
        section: {
            id: 1,
            class_room: 'class room number 5',
            course: {
                id: 2,
                name: 'darse 1'
            },
            teachers: [
                {
                    id: 2,
                    first_name: 'mamad',
                    last_name: 'mamadi'
                },
                {
                    id: 7,
                    first_name: 'gholam',
                    last_name: 'gholami'
                },
            ],
            section_times: [
                {
                    id: 2,
                    weekday: 'sunday',
                    start_time: '14:00',
                    end_time: '15:30'
                },
                {
                    id: 9,
                    weekday: 'monday',
                    start_time: '16:30',
                    end_time: '18:00'
                }
            ]
        }
    }),
    mounted() {
        this.getSectionDetail()
    },
    methods: {
        getSectionDetail() {
            const url = process.env.baseURL + `section/${this.$route.params.section_id}/detail/`
            this.$axios.get(url).then((resp) => {
                console.log(resp.data);
                this.section = resp.data
            })
        },
        getWeekDayName(weekdayNum) {
            return WEEK_DAYS[weekdayNum-1]
        }
    }
}
</script>
