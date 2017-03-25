<template>
    <div class="ui attached segment page-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {}
</script>
<style>
  .page-body {
    height: 100%;
    overflow-y: auto;
  }
</style>