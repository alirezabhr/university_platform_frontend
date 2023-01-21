<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left" v-for="header in headers" :key="header.value">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in table_data"
          :key="item.course_id"
          @click.prevent="this.$router.push(`section/${item.id}/`)"
        >
          <td>{{ item.course_id }}</td>
          <td>{{ item.course_name }}</td>
          <td>{{ item.credit }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'SectionsTable',
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    headers: [
      {text: 'ID', value: 'course_id'},
      {text: 'Course Name', value: 'course_name'},
      {text: 'Credit', value: 'credit'},
    ]
  }),
  computed: {
    table_data() {
      arr = []
      this.sections.forEach(element => {
        arr.push(this.table_row(element))
      });
      return arr
    },
    table_row(section) {
      return {
        id: section.id,
        course_id: section.course.id,
        credit: section.course.credit,
        course_name: section.course.name
      }
    }
  }
}
</script>
