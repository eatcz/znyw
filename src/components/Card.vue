<template>
    <div class="custom-card" :style="style">
        <div class="title-wrapper" v-if="isTitle">
            <slot name="title" />
        </div>
        <slot name="content" />

    </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

const { width, height, color, top, left, right, isTitle } = defineProps({
    width: Number,
    height: Number,
    color: String,
    top: Number,
    left: Number,
    right: Number,
    isTitle: Boolean
})

const style = computed(() => ({
    width: width + 'px',
    height: height + 'px',
    color: color,
    top: top + 'px',
    left: left + 'px',
    right: right + 'px'
}))
</script>

<style scoped lang='scss'>
.custom-card {
    position: absolute;
    padding: 5px 11px 0 10px;
    opacity: 1;
    background: #00000A;
    box-sizing: border-box;
    border: 1px solid #0E9CFF;
    box-shadow: inset 0px 0px 87px 0px rgba(1, 194, 255, 0.4);

    .title-wrapper {
        height: 42px;
        border-bottom: 1px solid #0E9CFF;
        color: #fff;
        font-size: 22px;
        font-weight: bold;
        line-height: 42px;
    }
}
</style>