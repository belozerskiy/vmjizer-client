<template>
 <page>
    <page-title icon="users" title="Пользователи" sub-title="Подсистема управления пользователями"></page-title>
    <page-body>
  <!--       <grid direction="column">
            <grid-row>
              <cards>
              <grid-column :scroll="true">
                  <card></card>
              </grid-column>
               <grid-column>
                  <card></card>
              </grid-column>
               <grid-column>
                  <card></card>
              </grid-column>
               <grid-column>
                  <card></card>
              </grid-column>
              </cards>
            </grid-row>
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
  import GridRow from '../Grid/GridRow.vue'

  import Card from '../Card/Card.vue'
  import Cards from '../Card/Cards.vue'

  export default {
      components: {
          Page,
          PageTitle,
          PageBody,
          Grid,
          GridColumn,
          GridRow,
          Card,
          Cards
      }
  }
</script>
<style>
  
</style>