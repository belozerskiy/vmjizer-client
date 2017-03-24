<template>
    <div id="grid">
        <div class="grid-row">
            <div class="left grid-column">
              <slot name="left-grid-column"></slot>
            </div>
            <div class="content grid-column">
                <div class="inner-grid">
                    <div class="ui grid">
                        <div class="row">
                            <div class="column col">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            exit(event){
                localStorage.setItem('token', '');
                this.$router.push('/login');
            }
        }
    }
</script>
<style>
    #grid {
        height: 100vh;
        width: 100vw;
    }
    
    .grid-row {
        display: flex;
        width: inherit;
        height: inherit;
    }
    
    #grid .left.grid-column {
        width: 50px;
        height: inherit;
    }
    
    #grid .content.grid-column {
        width: inherit;
        height: 100%;
    }
    
    #grid .ui.vertical.icon.menu {
        height: 100%;
        border-radius: 0;
        border-top: none;
        
    }

    #grid .inner-grid {
        height: 100%;
    }

    #grid .inner-grid .ui.grid {
        height: inherit;
        margin: 0;
    }

    #grid .ui.grid .row {
        height: inherit;
        padding: 0;
    }

   #grid .ui.grid .col {
        height: inherit;
        padding: 0;
    }

    #grid .ui.grid .workspace {
        height: inherit;
        border-radius: 0;
        border: none;
    }

</style>