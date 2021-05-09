<template>
  <div id="app">
    <h2>{{ appName }}</h2>
    <div class="container">
      <List />
    </div>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List
  },
  data () {
    return {
      appName: 'Bhavcopy - Equity'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding-top: 30px;
}
</style>
