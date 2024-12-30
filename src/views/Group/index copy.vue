<template>
    <div class="container">
        <Navbar />
        <Sidemenu :menus="l_menu" />
        <!-- <BaseInfo />
        <Situation />
        <InformationSummary />
        <PersonalBaseInfo />
        <ProductInfo />
        <Center />
        <SpecialCertificate />
        <ImportantInfo /> -->
    </div>
</template>

<script setup lang='ts'>
import Navbar from '../Home/components/Navbar.vue';
import Sidemenu from '../../components/Sidemenu.vue';
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
import { nanoid } from 'nanoid';

// const l_menu = [
//     {
//         id: nanoid(),
//         label: '项目基本信息'
//     },
//     {
//         id: nanoid(),
//         label: '项目情况'
//     },
//     {
//         id: nanoid(),
//         label: '专业信息汇总'
//     },
//     {
//         id: nanoid(),
//         label: '人员基础信息'
//     },

// ]

const l_menu = [
    {
        id: nanoid(),
        label: '人、车、料',
        img: 's1'
    },
    {
        id: nanoid(),
        label: '指标测评',
        img: 's2'
    },
    {
        id: nanoid(),
        label: '应急指挥',
        img: 's3'
    },
    {
        id: nanoid(),
        label: '工作计划',
        img: 's4'
    },
    {
        id: nanoid(),
        label: '工作进度',
        img: 's5'
    }
]
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