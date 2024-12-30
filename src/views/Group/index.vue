<template>
    <div class="container">
        <Navbar />
        <Sidemenu class="menu first" :class="{ 'active': menuStore.isShowLeftMenu }" :menus="l_menu" />
        <Sidemenu class="menu second" :class="{ 'active': menuStore.isShowRightMenu }" :menus="r_menu" />
        <BaseInfo v-show="menuStore.isShowBaseInfo" />
        <Situation v-show="menuStore.isShowSituation" />
        <InformationSummary v-show="menuStore.isShowInformationSummary" />
        <PersonalBaseInfo v-show="menuStore.isShowPersonalBaseInfo" />
        <ProductInfo v-show="menuStore.isShowProductInfo" />
        <Center />
        <SpecialCertificate v-show="menuStore.isShowSpecialCertificate" />
        <ImportantInfo v-show="menuStore.isShowImportantInfo" />
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
import Center from './components/Center.vue';
import { nanoid } from 'nanoid';
import { useMenuStore } from '../../store/modules/menu';

const menuStore = useMenuStore()


const l_menu = [
    {
        id: nanoid(),
        label: '项目基本信息',
        meta: 'isShowBaseInfo'
    },
    {
        id: nanoid(),
        label: '项目情况',
        meta: 'isShowSituation'
    },
    {
        id: nanoid(),
        label: '专业信息汇总',
        meta: 'isShowInformationSummary'
    },
    {
        id: nanoid(),
        label: '人员基础信息',
        meta: 'isShowPersonalBaseInfo'
    },

]

const r_menu = [
    {
        id: nanoid(),
        label: '特种证件统计',
        meta: 'isShowProductInfo'
    },
    {
        id: nanoid(),
        label: '生产信息汇总',
        meta: 'isShowSpecialCertificate'
    },
    {
        id: nanoid(),
        label: '项目重要信息',
        meta: 'isShowImportantInfo'
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