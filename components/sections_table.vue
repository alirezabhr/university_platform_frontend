<template>
  <v-container>
    <div class="text-h5 py-4 font-weight-bold ">Active Courses</div>
    <v-simple-table>
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
            v-for="item in sections"
            :key="item.id"
            class="blue lighten-4"
            @click.prevent="$router.push(`section/${item.id}/`)"
          >
            <td>{{ item.course_id }}</td>
            <td>{{ item.course_name }}</td>
            <td>{{ item.credit }}</td>
            <td>{{ item.department }}</td>
            <td>{{ item.class_room }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
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
      {text: 'Department', value: 'department'},
      {text: 'Class Room', value: 'class_room'},
    ]
  }),
}
</script>

<style scoped>
tr:hover {
  color: red;
  cursor: pointer;
}
</style>