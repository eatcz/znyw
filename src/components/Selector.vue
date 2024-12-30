<template>
    <el-select v-model="project" placeholder="请选择项目" size="large" style="width: 226px;margin-right: 4px;">
        <el-option v-for="item in projectList" :key="item.id" :label="item.label" :value="item.id" />
    </el-select>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

interface ProjectList {
    id: string | number
    label: string
}

const { projectList } = defineProps({
    projectList: Array<ProjectList>
})

const project = ref('')

console.log(projectList)
</script>

<style scoped lang='scss'></style>

<style scoped>
:deep(.el-select__wrapper) {
    min-height: 0;
    background: rgba(22, 92, 255, 0.4);
    border: 1px solid #409EFF;
    outline: none;
}

:deep(.el-select-dropdown__wrap) {
    min-width: 120px;
}
</style>