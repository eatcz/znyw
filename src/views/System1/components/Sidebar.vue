<template>
    <div class="sidebar">
        <el-input placeholder="请输入部门名称"></el-input>
        <el-tree style="max-width: 600px" :data="data" :props="defaultProps" @node-click="handleNodeClick" />
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const { path } = useRoute()
const router = useRouter()


interface Tree {
    label: string
    children?: Tree[]
    path?: string
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
    if (data.path) {
        const fullPath = `${path}${data.path}`
        router.push(fullPath)
    }
}

const data: Tree[] = [
    {
        label: '用户管理',
        path: '/user'
    },
    {
        label: 'Level one 2',
        children: [
            {
                label: 'Level two 2-1',

            },
            {
                label: 'Level two 2-2',

            },
        ],
    },
    {
        label: 'Level one 3',
        children: [
            {
                label: 'Level two 3-1',

            },
            {
                label: 'Level two 3-2',
            },
        ],
    },
]

const defaultProps = {
    children: 'children',
    label: 'label',
}

</script>

<style scoped lang='scss'>
.sidebar {
    width: 450px;
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