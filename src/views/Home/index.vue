<template>
    <div class="wrapper">
        <Navbar />
        <Sidemenu class="menu first" :class="{ 'active': menuStore.isShowLeftMenu }" :menus="l_menu" />
        <Sidemenu class="menu second" :class="{ 'active': menuStore.isShowRightMenu }" :menus="r_menu" />

        <Vehicles v-show="menuStore.isShowVehicles" />
        <Evaluation v-show="menuStore.isShowEvaluation" />
        <EmergencyCommend v-show="menuStore.isShowEmergencyCommend" />
        <WorkProgress v-show="menuStore.isShowWorkProgress" />
        <WorkPlan v-show="menuStore.isShowWorkPlan" />
        <CurrentLeader v-show="menuStore.isShowCurrentLeader" />
        <FixedGuard v-show="menuStore.isShowFixedGuard" />
        <CurrentLevel v-show="menuStore.isShowCurrentLevel" />
        <!-- <component :is="component"></component> -->
    </div>
</template>

<script setup lang='ts'>
import Navbar from './components/Navbar.vue';
import Sidemenu from '../../components/Sidemenu.vue';
import Vehicles from './components/Vehicles.vue';
import Evaluation from './components/Evaluation.vue';
import EmergencyCommend from './components/EmergencyCommend.vue';
import WorkPlan from './components/WorkPlan.vue';
import WorkProgress from './components/WorkProgress.vue';
import CurrentLeader from './components/CurrentLeader.vue';
import FixedGuard from './components/FixedGuard.vue';
import { nanoid } from 'nanoid';
import { useMenuStore } from '../../store/modules/menu';
import { computed } from 'vue';
import CurrentLevel from './components/CurrentLevel.vue';

const menuStore = useMenuStore()

const component = computed(() => {
    switch (menuStore.currentShow) {
        case 0:
            return Vehicles
        case 1:
            return Evaluation
        case 2:
            return EmergencyCommend
        case 3:
            return WorkPlan
        case 4:
            return WorkProgress
        case 5:
            return CurrentLeader
    }
})

const l_menu = [
    {
        id: nanoid(),
        label: '人、车、料',
        img: 's1',
        meta: 'isShowVehicles'
    },
    {
        id: nanoid(),
        label: '指标测评',
        img: 's2',
        meta: 'isShowEvaluation'
    },
    {
        id: nanoid(),
        label: '应急指挥',
        img: 's3',
        meta: 'isShowEmergencyCommend'
    },
    {
        id: nanoid(),
        label: '工作计划',
        img: 's4',
        meta: 'isShowWorkPlan'
    },
    {
        id: nanoid(),
        label: '工作进度',
        img: 's5',
        meta: 'isShowWorkProgress'
    }
]

const r_menu = [
    {
        id: nanoid(),
        label: '当前领导',
        img: 's6',
        meta: 'isShowCurrentLeader'
    },
    {
        id: nanoid(),
        label: '固定值守点',
        img: 's7',
        meta: 'isShowFixedGuard'
    },
    {
        id: nanoid(),
        label: '当前值守等级',
        img: 's8',
        meta: 'isShowCurrentLevel'
    }
]
</script>

<style scoped lang='scss'>
.wrapper {
    position: relative;
}

.menu {
    position: absolute;
}

.first {
    left: 0;
    transform: translateX(-42px);
}

.second {
    right: 0;
    transform: translateX(42px);
}

.active {
    transform: translateX(0);
}
</style>