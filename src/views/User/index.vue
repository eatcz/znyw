<template>
    <div class="user-wrapper">
        <div class="title-wrapper">
            <h3 class="title">人员列表</h3>
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
            <el-table :data="tableData" style="width: 100%" :row-style="table_row_style"
                :header-row-style="table_header_row_style">
                <el-table-column prop="username" label="用户名" align="center" width="180">
                </el-table-column>
                <el-table-column prop="nickName" label="昵称" align="center" width="180">
                    <template #default="scope">
                        <p style="color: #67C23A;">{{ scope.row.nickName }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="leader" align="center" label="职级">
                    <template #default="scope">
                        <el-tag type="success">{{ scope.row.leader ? '领导' : '非领导' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="phone" align="center" label="联系方式">
                    <template #default="scope">
                        <p>{{ scope.row.phone }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="dept" align="center" label="部门">
                    <template #default="scope">
                        <p> {{ scope.row.dept.name }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="createTime" align="center" label="创建时间">
                    <template #default="scope">
                        <p> {{ scope.row.createTime }}</p>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template #default="scope">
                        <el-link :underline="false" type="primary" @click="handleShowDetail(scope.row)">查看详情</el-link>
                        <el-link :underline="false" type="primary" style="margin: 0 15px;"
                            @click="handleUpdateShow(scope.row)">修改</el-link>
                        <el-link :underline="false" type="primary" @click="handleDelete(scope.row.id)">删除</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="prev, pager, next" :total="pages.total"
                    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
        </div>
    </div>
    <Information ref="infoRef" />

    <Form ref="formRef" @getUserList="getUserList" />
</template>

<script setup lang='ts'>
import { onMounted, provide, ref } from 'vue'
import { getImageUrl } from '../../utils'
import { deleteUser, getUser } from '../../api/user'
import Form from './components/Form.vue'
import { ElMessage, ElMessageBox, } from 'element-plus'
import Information from './components/Information.vue'



onMounted(() => {
    getUserList()
})

const formRef = ref<null | any>(null)
const infoRef = ref<null | any>(null)


// 用户列表

const tableData = ref([])
const pages = ref({
    total: 0
})

const getUserList = async () => {
    const res = await getUser() as any
    tableData.value = res.content
    pages.value.total = res.totalElements
}

// provide('getUserList', getUserList)

// 新增
const handleAdd = () => {
    formRef.value.handleShow()
}

// 查看详情
const handleShowDetail = (row: any) => {
    infoRef.value.handleShow(row)
}

// 修改
const handleUpdateShow = (row: any) => {
    formRef.value.handleShow(row)
}

// 删除用户id数组
const ids = ref<Array<string | number>>([])

// 删除
const handleDelete = (id: string | number) => {
    ElMessageBox.confirm('确定要删除吗?', '提示:', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(async () => {
        if (id) {
            ids.value.push(id)
        }
        const res = await deleteUser(ids.value)
        console.log(res)
        ElMessage({
            type: 'success',
            message: '删除成功'
        })
        await getUserList()
    }).catch(err => {
        ElMessage({
            type: 'warning',
            message: err
        })
    })
}

// 分页
const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
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