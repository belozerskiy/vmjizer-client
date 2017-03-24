<template>
  <div id="app">
    <loader v-if="$store.state.loading"></loader>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import Loader from './components/Loader.vue'

export default {
  name: 'app',
  components: {
    Loader
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

*:before, *:after{
  box-sizing: border-box;
}

body {
  overflow: hidden;
}

#app {
  width: 100vw;
  height: 100vh;
  min-width: 960px;
}

</style>
