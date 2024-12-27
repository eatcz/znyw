<template>
    <div class="container">
        <BaseInfo />
        <Situation />
        <InformationSummary />
        <PersonalBaseInfo />
        <ProductInfo />
        <!-- <Task />
        <BottomTask /> -->
        <Center />
        <SpecialCertificate />
        <ImportantInfo />
    </div>
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
import BaseInfo from './components/BaseInfo.vue';
import Situation from './components/Situation.vue';
import InformationSummary from './components/InformationSummary.vue';
import PersonalBaseInfo from './components/PersonalBaseInfo.vue';
import ProductInfo from './components/ProductInfo.vue';
import SpecialCertificate from './components/SpecialCertificate.vue';
import ImportantInfo from './components/ImportantInfo.vue';
// import Task from './components/Task.vue';
// import BottomTask from './components/BottomTask.vue';
import Center from './components/Center.vue';
</script>

<style scoped lang='scss'>
.container {
    // height: 100px;
    width: 100%;
    // background-color: #f0ff12;
    position: relative;
    padding-bottom: 20px;
}
</style>