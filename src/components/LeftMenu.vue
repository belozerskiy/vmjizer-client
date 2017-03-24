<template>
    <div class="ui vertical icon menu" id="left-menu">
        <button class="ui icon button " 
            v-for="item in items" 
            @click="$store.dispatch(item.handler)" 
            :data-tooltip="item.tooltip" data-position="right center"
        >
            <i :class="[ 'icon', item.name ]"></i>
        </button>
    </div>
</template>
<script>
    export default {
        computed: {
            items() { return this.$store.state.items }
        },
        mounted(){
            // $('#left-menu button').popup({
            //     position : 'right center',
            //     title    : 'My favorite dog',
            //     content  : 'My favorite dog would like other dogs as much as themselves'
            // });
        }
    }
</script>
<style>
    #left-menu {
        width: 50px;
        height: 100%;
        border-radius: 0;
        border-top: none;
        border-bottom: none;
    }
    #left-menu {
        text-align: center;
    }
    #left-menu button {
        margin-top: 5px;
        margin-right: 0;
    } 
</style>