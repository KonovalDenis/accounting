<template>
  <div id="winner-block">
    <button @click="SelectWinner()">Select a Winner</button>
    <p>
      {{winner}}
    </p>
    <p>Hello</p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
      return {
          names: null,
          winner: null,
      }
  },
  mounted: function() {
    this.FetchData();
  },
  methods: {
      FetchData: function() {
          var app = this;
          axios.get(process.env.API_URL + "/api_example/").then(response => {
              app.names = response.data.names;
          });
      },
      SelectWinner: function() {
        var winner = this.names[Math.floor(Math.random()*this.names.length)];
        this.winner = winner;
      },
  }
}
</script>
<style>
</style>