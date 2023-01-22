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
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'SectionStudentsPage',
    data: () => ({
        headers: [
            { text: 'No.', value: 'number' },
            { text: 'Student ID', value: 'sid' },
            { text: 'Student First Name', value: 'first_name' },
            { text: 'Student Last Name', value: 'last_name' },
        ],
    }),
    computed: {
        ...mapGetters(),
        
        students() {
            return [
                {
                    number: 1,
                    sid: 9832089,
                    first_name: 'alireza',
                    last_name: 'bahrol'
                },
                {
                    number: 2,
                    sid: 9923141,
                    first_name: 'asfd',
                    last_name: 'ewqrew'
                },
                {
                    number: 3,
                    sid: 318345,
                    first_name: 'afare 3',
                    last_name: 'familish'
                },
            ]
        }
    }
}
</script>
