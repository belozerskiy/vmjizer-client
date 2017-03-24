<template>
    <div id="layout"> 
        <grid>
            <left-menu slot="left-grid-column"></left-menu>
            <router-view></router-view>
        </grid>
    </div>
</template>
<script>
    import Grid from './Grid.vue'
    import Page from './pages/Page.vue'
    import LeftMenu from './LeftMenu.vue'

    export default { 
        components: { Grid, LeftMenu, Page } 
    } 
</script>
<style>
</style>