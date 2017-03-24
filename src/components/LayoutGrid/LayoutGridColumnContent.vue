<template>
  <div class="layout-grid-column-content">
    <slot></slot>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .layout-grid-column-content {
    position: absolute;
    left: 55px;
    right: 5px;
    top: 5px;
    bottom: 5px;
    background: #ddd;
  }
</style>