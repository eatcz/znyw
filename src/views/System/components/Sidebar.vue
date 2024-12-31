<template>
    <div class="sidebar">
        <el-input placeholder="请输入部门名称" v-model="keyword"></el-input>
        <el-tree style="max-width: 600px" :data="data" :props="defaultProps" @node-click="handleNodeClick" />
    </div>
</template>

<script setup lang='ts'>
import { nextTick, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const { path } = useRoute();
const router = useRouter();

onMounted(() => {
    // nextTick(() => {
    //     // 只在当前路径不是 /system 时，跳转到 /system
    //     if (path !== '/system') {
    //         router.replace(`/system`);
    //     }
    // });
});

interface Tree {
    label: string;
    children?: Tree[];
    path?: string;
}

// keyword
const keyword = ref('')

const handleNodeClick = (data: Tree) => {
    if (data.path) {
        // 如果目标路径是以 `/` 开头，说明它是一个绝对路径
        if (data.path.startsWith('/')) {
            router.push(data.path);  // 跳转到绝对路径
        } else {
            // 如果目标路径是相对路径，拼接当前路径
            const fullPath = `${path}${data.path}`;
            router.push(fullPath);
        }
    }
}

const data: Tree[] = [
    {
        label: '用户管理',
        path: '/system/user'
    },
    // {
    //     label: '部门管理',
    //     path: '/system/department'
    // },
]

const defaultProps = {
    children: 'children',
    label: 'label',
}
</script>



<style scoped lang='scss'>
.sidebar {
    // position: absolute;
    min-width: 450px;
    // height: calc(100% - 74px);
    margin-right: 13px;
    padding: 13px 9px 0;
}
</style>

<style scoped>
:deep(.el-input) {
    height: 42px;
    opacity: 1;

    background: rgba(0, 0, 0, 0.71);

    border: 1px solid rgba(22, 92, 255, 0.28);
}

:deep(.el-input__wrapper) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.71);
    border: 1px solid rgba(15, 24, 202, 0.28) !important;
    border-radius: 4px;
}

:deep(.el-input__inner) {
    height: 32px;
    color: #fff;
}

:deep(.el-icon svg) {
    color: #fff;
}

:deep(.el-tree) {
    background: transparent !important;
}

:deep(.el-tree-node__content:hover) {
    background: transparent !important;
}

:deep(.el-tree-node:focus) {
    /* background: transparent !important; */
    background: rgba(22, 92, 255, 0.4);
}

:deep(.el-tree) {
    color: #fff;
}

/* :deep(.is-focusable) {
    background-color: transparent !important;
} */

:deep(.el-table td.el-table__cell) {
    border-bottom: none;
}

:deep(.el-table th.el-table__cell) {
    background: none;
}

/* :deep(.el-tree .el-tree-node__content.is-checked) {
    background-color: transparent !important;
} */
</style>