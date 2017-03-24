<template>
    <grid class="page">
        <slot></slot>
    </grid>
</template>
<script>
    import Grid from '../Grid/Grid.vue'

    export default {
        components: { Grid }
    }
</script>

<style>
</style>
