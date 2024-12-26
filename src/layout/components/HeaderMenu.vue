<template>
    <div class="header-menu">
        <ul class="menus flex">
            <li class="item" :class="{ active: currentIndex === index }" v-for="(item, index) in menuList"
                :key="item.id" @click="handleClick(index, item.path)">
                <p class="title">{{ item.label }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

interface MenuList {
    id: string
    path: string
    label: string
}

const { menuList } = defineProps({
    menuList: Array<MenuList>
})

const router = useRouter()

const currentIndex = ref<null | number>(null)

const handleClick = (index: number, path: string) => {
    currentIndex.value = index
    router.push(path)

}
</script>

<style scoped lang='scss'>
.menus {
    height: 100%;
    gap: 24px;

    .item {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: bold;
        padding: 4px 20px;

        &:hover {
            background-image: url('../../assets/imgs/hover.svg');
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        &:hover .title {
            font-family: Alimama ShuHeiTi;
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
            text-align: center;
            letter-spacing: 0em;
            font-variation-settings: "opsz" auto;
            font-feature-settings: "kern" on;
            background: linear-gradient(180deg, #FFFFFF 0%, #165CFF 100%), #FFFFFF;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            opacity: 1;
        }
    }
}

.active {
    background-image: url('../../assets/imgs/hover.svg');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .title {
        font-family: Alimama ShuHeiTi;
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0em;
        font-variation-settings: "opsz" auto;
        font-feature-settings: "kern" on;
        background: linear-gradient(180deg, #FFFFFF 0%, #165CFF 100%), #FFFFFF;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        opacity: 1;
    }
}
</style>