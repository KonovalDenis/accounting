<template>
  <div>
      <h1>Hello! This is our homepage with nice buttons and table</h1>
      <h3>My name is {{ name }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
      return {

      }
  },
  mounted: function() {

  },
  computed: {
      ...mapGetters({
            name: 'get_name',
		}),
  },
  methods: {

  }
}
</script>

<style scoped>
    h1 {
        color: green;
    }
</style>