<template>
    <layout-grid>
        <layout-grid-column-left>
            <left-menu></left-menu>
        </layout-grid-column-left>
        <layout-grid-column-content>
            <router-view></router-view>
        </layout-grid-column-content>
    </layout-grid>
</template>
<script>
    import LayoutGrid from './LayoutGrid/LayoutGrid.vue'
    import LayoutGridColumnLeft from './LayoutGrid/LayoutGridColumnLeft'
    import LayoutGridColumnContent from './LayoutGrid/LayoutGridColumnContent'
    import LeftMenu from './LeftMenu.vue'

    export default { 
        components: {
            LayoutGrid,
            LayoutGridColumnLeft,
            LayoutGridColumnContent,
            LeftMenu
        }
    } 
</script>
<style>
</style>