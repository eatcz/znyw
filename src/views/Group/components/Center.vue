<template>
    <div class="center-container">
        <Task />
        <Map />
        <BottomTask />
    </div>
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
import Task from './Task.vue';
import Map from './Map.vue';
import BottomTask from './BottomTask.vue';
</script>

<style scoped lang='scss'>
.center-container {
    position: absolute;
    left: 472px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 472px * 2 - 18px * 2);
    margin-left: 17px;
}
</style>