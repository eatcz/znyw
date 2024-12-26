<script setup lang="ts">
import { onMounted } from 'vue';
import autofit from 'autofit.js';

onMounted(() => {
    autofit.init({
        el: '#app',
        resize: true
    })
})
</script>

<template>
    <RouterView />
</template>
