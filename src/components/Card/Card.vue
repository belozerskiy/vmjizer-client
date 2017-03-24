<template>
  <div class="ui card">
    <div class="content">
      <a class="header" v-if="header">{{ header }}</a>
      <div class="description" v-if="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['header', 'description']
  }
</script>
<style scoped>
  .ui.card {
    width: 100%;
  }
</style>