<template>
    <div id="page">
        <h3 class="ui top attached  header">
            <i :class="[icon, 'icon']"></i>
            <div class="content">
                <slot name="title"></slot>
                <div class="sub header"><slot name="sub-title"></slot></div>
            </div>
        </h3>
        <div class="ui attached segment">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            icon: String,
            required: true
        }
    }
</script>
<style>
    #page {
        height: inherit;
        padding: 5px;
        display: flex;
        flex-direction: column;
    }
    #page .ui.segment {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        height: inherit;
    }

</style>