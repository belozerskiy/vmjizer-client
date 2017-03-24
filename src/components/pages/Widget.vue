<template>
    <div id="widget">
       <h3 class="ui top attached  header">
            <i :class="[icon, 'icon']"></i>
            <div class="content">
                <slot name="title"></slot>
                <div class="sub header"><slot name="sub-title"></slot></div>
            </div>
        </h3>
        <div class="ui attached segment">
            <div class="widget-content">
                <slot name="content"></slot>
            </div>
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
<style >
    .widget-content {
        text-align: center;
    }

</style>