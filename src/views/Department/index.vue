<template>
    <div class="user-wrapper">
        <div class="title-wrapper">
            <h3 class="title">部门列表</h3>
            <div class="button-wrapper">
                <!-- <div class="button" v-for="item in fnList" :key="item.id"> -->
                <div class="button" @click="handleAdd">
                    <img :src="getImageUrl('users')" alt="">
                    <span>新增</span>
                </div>
                <div class="button">
                    <img :src="getImageUrl('import')" alt="">
                    <span>导入</span>
                </div>
            </div>
        </div>

        <div class="table-wrapper">
            <el-table :data="tableData" style="width: 100%" row-key="id" border lazy :load="load"
                :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" :row-style="table_row_style"
                :header-row-style="table_header_row_style">
                <el-table-column prop="name" label="名称" align="center">
                </el-table-column>
                <el-table-column prop="deptSort" label="排序" align="center">
                </el-table-column>

                <el-table-column prop="createTime" align="center" label="创建时间">
                    <template #default="scope">
                        <p> {{ scope.row.createTime }}</p>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template #default="scope">
                        <el-link :underline="false" type="primary" @click="handleAddSub(scope.row)">添加部门</el-link>
                        <el-link :underline="false" type="primary" style="margin: 0 15px;"
                            @click="handleUpdateShow(scope.row)">修改</el-link>
                        <el-link :underline="false" type="primary"
                            @click="handleDelete(scope.row.id, scope.row.pid)">删除</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <el-tree style="max-width: 600px" :props="props" :load="loadNode" lazy show-checkbox>

                <template #default="{ node, data }">
                    <span class="custom-tree-node">
                        <span>{{ node.label }}</span>
                        <span class="fn">
                            <a @click="append(data)"> 添加部门 </a>
                            <a style="margin-left: 8px" @click="remove(node, data)"> 删除部门 </a>
                        </span>
                    </span>
                </template> </el-tree> -->
        </div>
    </div>

    <Form ref="formRef" @getDepList="getDepList" @load="load" />

</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { getImageUrl } from '../../utils'
import { getDepartment, getSubDep, deleteDepartment } from '../../api/department'
import Form from './components/Form.vue'
import { ElMessage, ElMessageBox, } from 'element-plus'

interface User {
    id: number
    name: string
    deptSot: string
    hasChildren?: boolean
    children?: User[]
}

onMounted(async () => {

    await getDepList()
})

const formRef = ref<null | any>(null)

// 懒加载数据

const load = async (row: User, treeNode: unknown, resolve: (data: User[]) => void) => {
    const res = await getSubDep(row.id) as any
    resolve(res.content)
}

const tableData = ref<any>([])

const getDepList = async () => {
    const res = await getDepartment() as any
    tableData.value = res.content
}

// 新增
const handleAdd = () => {
    formRef.value.handleShow()
}

// 新增子部门
const handleAddSub = (row: any) => {
    const pid = row.id
    formRef.value.handleShow({ pid })
}

// 修改
const handleUpdateShow = (row: any) => {
    formRef.value.handleShow(row)
}

// 删除用户id数组
const ids = ref<Array<string | number>>([])

// 删除
const handleDelete = (id: string | number, pid: number) => {
    ElMessageBox.confirm('确定要删除吗?', '提示:', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(async () => {
        if (id) {
            ids.value.push(id)
        }
        const res = await deleteDepartment(ids.value)
        console.log(res)
        ElMessage({
            type: 'success',
            message: '删除成功'
        })
        // await getDepList()
        location.reload()
        // await getUserList()
    })
}

const table_row_style = {
    backgroundColor: '#071c53',
    opacity: 1,
    border: '1px solid red',
    color: '#fff'
}

const table_header_row_style = {
    background: '#0b2f89',
}
</script>

<style scoped lang='scss'>
.user-wrapper {

    .title-wrapper {
        display: flex;
        justify-content: space-between;
        padding-bottom: 7px;
        border-bottom: 1px solid #0e9cff;

        .title {
            font-size: 18px;
            color: #fff;
            font-weight: bold;
        }

        .button-wrapper {
            display: flex;
            gap: 12px;

            .button {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 140px;
                border-radius: 4px;
                opacity: 1;
                padding: 3.5px 6px;
                gap: 4px;
                background: rgba(47, 109, 255, 0.2);
                color: #fff;

                box-sizing: border-box;
                border: 1px solid #2F6DFF;
            }
        }
    }

    .pagination {
        position: absolute;
        right: 16px;
        bottom: 16px;

    }

}


.btn {
    cursor: pointer;
    width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(47, 109, 255, 0.2);
    border-radius: 4px;
    opacity: 1;
    box-sizing: border-box;
    border: 1px solid #2F6DFF;
    color: #fff;
}

.table-row-bg {
    background-color: #000;
}

.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;

    .fn {
        a {
            color: #0e9cff;
        }
    }
}
</style>

<style scoped>
:deep(.el-table td.el-table__cell) {
    border-bottom: none;
}

:deep(.el-table th.el-table__cell) {
    background: none;
}

:deep(.is-leaf) {
    border-bottom: none !important;
}

:deep(.el-table::before) {
    height: 0px;
}

/* 
:deep(.el-table__row:hover) {
    background-color: red !important;
} */

:deep(.el-pager li) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}

:deep(.btn-prev) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}

:deep(.btn-next) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}

:deep(.el-dialog) {
    /* background: rgba(47, 109, 255, 0.2) !important; */
    color: #fff;
    box-sizing: border-box;
    border: 1px solid #2F6DFF;
    opacity: 1 !important;
}

:deep(.el-message-box__title) {
    text-align: center !important;
}
</style>