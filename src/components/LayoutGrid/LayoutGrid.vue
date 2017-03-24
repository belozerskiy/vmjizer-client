<template>
   <div class="layout-grid">
    <slot></slot>
  </div>
</template>
<style>
  .layout-grid {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    min-width: 960px;
  }
</style>