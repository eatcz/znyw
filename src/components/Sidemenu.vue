<template>
    <div class="menu-wrapper">
        <div class="menu-item" v-for="(item, index) in menus" :key="item.id" @click="handleClick(item.id, index, item)"
            :class="{ 'item-active': (currentId === item.id && currentIndex == menuStore.currentShow) }">
            <img v-if="item.img" :src="getImageUrl(item.img)" alt="">
            <p class="title">{{ item.label }}</p>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useMenuStore } from '../store/modules/menu';
import { getImageUrl } from '../utils';
import { type State } from '../store/modules/menu';
const menuStore = useMenuStore()

interface MenuList {
    id: string
    label: string
    img?: string
    meta?: string
}


const { menus } = defineProps({
    handleComponentShow: Function,
    menus: Array<MenuList>
})

const currentId = ref<string | null>(null)
const currentIndex = ref<number | null>(null)

const handleClick = (id: string, index: number, item: MenuList) => {
    console.log(item)
    currentIndex.value = (menus && menus.length == 3) ? index + 5 : index
    // menuStore.toggleSideMenu(index)
    menuStore.setSideMenuShow(currentIndex.value as number)
    currentId.value = id
    menuStore.sidemenuShow(item.meta as keyof State)

}

</script>

<style scoped lang='scss'>
.menu-wrapper {
    width: 42px;
    padding-top: 4px;

}

.menu-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 142px;
    border-radius: 0px 4px 4px 0px;
    opacity: 1;
    padding: 10px;
    background: rgba(22, 92, 255, 0.2);
    margin-bottom: 4px;
    text-wrap: nowrap;

    .title {
        font-family: AlibabaPuHuiTi;
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0em;
        font-variation-settings: "opsz" auto;
        color: rgba(255, 255, 255, 0.6);
        writing-mode: vertical-rl;
        letter-spacing: 2px;
    }
}

.item-active {
    background: rgba(47, 109, 255, 0.9);
}
</style>