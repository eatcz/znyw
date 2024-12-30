<template>
    <div class="backdrop">
        <div class="dialog" :style="style">
            <header>
                <slot name="title" />
            </header>

            <div class="content">
                <slot name="content" />
            </div>

            <footer>
                <slot name="footer" />
            </footer>
        </div>
    </div>
</template>

<script setup lang='ts'>

import { computed, ref } from 'vue';

const { width, height, color, top, left, right } = defineProps({
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

// const dialogVisiableShow = ref(false)
</script>

<style scoped lang='scss'>
.backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    overflow: hidden;
    z-index: 1;
}

.dialog {
    position: relative;
    border-radius: 4px;
    opacity: 1;
    background: #00000A;
    box-sizing: border-box;
    border: 1px solid #0E9CFF;
    box-shadow: inset 0px 0px 87px 0px rgba(1, 194, 255, 0.4);

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        // background-color: #fff;
        color: #fff;
        font-size: 22px;
    }

    .content {
        color: #fff;
        padding: 10px 40px 22px;
    }

    footer {
        position: absolute;
        right: 40px;
        bottom: 20px;
    }
}
</style>