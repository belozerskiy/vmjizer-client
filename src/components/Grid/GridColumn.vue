<template>
    <div class="grid-column" :class="{ 'scroll': scroll }">
        <slot></slot>
    </div>
</template>
<script>
    export default {
      props: {
        scroll: { type: Boolean, default: false }
      }
    }
</script>
<style scoped>
    .grid-column { display: flex; flex-grow: 1; }
    .scroll { overflow-y: auto; }
</style>