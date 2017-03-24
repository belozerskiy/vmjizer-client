<template>
 <page>
    <page-title icon="settings" title="Настройки" sub-title="Область настройки приложения"></page-title>
    <page-body>
<!--         <grid>
            <grid-row>
                <grid-column>
                    1
                </grid-column>
                <grid-column>
                    2
                </grid-column>
                <grid-column>
                    3
                </grid-column>
            </grid-row>
            <grid-row>
                <grid-column>
                    4
                </grid-column>
                <grid-column>
                    5
                </grid-column>
                <grid-column>
                    6
                </grid-column>
        </grid> -->
    </page-body>
</page>
</template>
<script>
    import Page from '../Page/Page.vue'
    import PageTitle from '../Page/PageTitle.vue'
    import PageBody from '../Page/PageBody.vue'

    import Grid from '../Grid/Grid.vue'
    import GridColumn from '../Grid/GridColumn.vue'
    import GridRow from '../Grid/GridColumn.vue'

    export default {
        components: {
            Page,
            PageTitle,
            PageBody,
            Grid,
            GridColumn,
            GridRow,
        }
    }
</script>
<style>
    #settings {
        height: inherit;
    }
</style>