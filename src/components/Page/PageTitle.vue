<template>
    <h3 class="ui top attached header">
        <i :class="[icon, 'icon']"></i>
        <div class="content">
            <slot name="title">{{ title }}</slot>
            <div class="sub header">{{ subTitle }}</div>
        </div>
    </h3>
</template>
<script>
    export default {
        props: {
            icon: { type: String, required: true },
            title: { type: String, required: true },
            subTitle: { type: String, required: false }
        }
    }
</script>
<style>

</style>