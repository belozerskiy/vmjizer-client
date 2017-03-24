<template>
    <div :class="['ui', 'active', { inverted }, 'dimmer']">
        <div :class="['ui', size, 'text', 'loader']">{{ text }}</div>
    </div>
</template>
<script>
    export default {
        props: {
            size: { type: String, default: 'medium' },
            text: { type: String, default: 'Загрузка'},
            inverted: { type: Boolean, default: true }
        }
    }
</script>
<style>
    ui.segment {
        height: 100%;
    }
</style>