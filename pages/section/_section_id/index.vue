<template>
  <v-container>
    <v-col cols="3">
        <v-card>
            <v-card-actions>
                <v-btn outlined @click.prevent="">
                    Extra Practice Class Request
                </v-btn>
                <v-btn outlined @click.prevent="">
                    Students List
                </v-btn>
                <v-btn outlined @click.prevent="">
                    Exam DateTime Polls
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="9">
        <div class="h5">
            Section Detail
        </div>
        <v-card>
            <v-card-title>Course: {{ section.course.name }}</v-card-title>
            <v-card-text>Class Room: {{ section.classRoom }}</v-card-text>
            <v-card-text>Teachers: </v-card-text>
            <div v-for="teacher in section.teachers" :key="teacher.id">
                <div>{{ teacher.id }}</div>
            </div>
            <v-card-text>Dates and Times:</v-card-text>
            <div v-for="sectionTime in section.sectionTimes" :key="sectionTime.id">
                <div>{{ sectionTime.id }}</div>
                <div>{{ sectionTime.weekday }}</div>
                <div>{{ sectionTime.startTime }}</div>
                <div>{{ sectionTime.endTime }}</div>
                <br/>
            </div>
        </v-card>
    </v-col>
  </v-container>
</template>

<script>
import SectionDetail from '~/models/section_detail'

export default {
    name: 'SectionPage',
    data: () => ({
        section: SectionDetail()
    }),
    methods: {

    }
}
</script>
