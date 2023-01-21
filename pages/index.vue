<template>
  <v-row justify="center" align="center">
    <SectionTable :sections="sections" />
  </v-row>
</template>

<script>
import UserPositionType from '~/models/enums/user_position_types'
import SectionsTable from '~/components/sections_table.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    SectionsTable
  },
  data: () => ({
    sections: []
  }),
  mounted() {
    this.getSections()
  },
  methods: {
    // ...mapActions()
    getSections() {
      if (this.getUser) {
        if (this.getUserCurrenctPosition.positionType = UserPositionType.STUDENT) {
          //TODO should set termId
          // const termId = -1
          const url = process.env.baseURL + `${this.getUserCurrenctPosition.id}/section/${termId}/`
        } else {

        }

        this.$axios.get(url).then(() => {
          //TODO should fill sections
          this.sections = []
        })
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['getUser', 'getUserCurrenctPosition'])
  }
}
</script>
